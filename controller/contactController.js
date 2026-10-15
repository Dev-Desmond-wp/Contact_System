const database = require('../model/database.json');
const fs = require('fs');

const saveTODB = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./model/database.json', data, (error, data) => {
            if (error) {
                reject('Error writing to database')
            } else {
                resolve('File written successfully')
            }
        })
    })
}

const addContact = (req, res) => {
    const contacts = database;
    res.status(200).json({ data: contacts});
}

const viewContact = (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;
    const contact = database.find((el) => el.id === id);
    if (!contact) {
        res.status(404).json({ message: "Contact not found"})
    }
    res.status(200).json({ data: contact})
}

const updateContact = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;

    const contact = database.find((el) => el.id === id);
    if (!contact) {
        return res.status(404).json({ message: "Contact not found" })
    }
    contact.name = name || name;
    contact.gender = gender || gender;
    contact.email = email || email;
    contact.phone = phone || phone;
    
    awaitsaveTODB(JSON.stringify(database, null, 2))

    res.status(200).json({ message: 'Contact updated successfully', data: contact
    })
}

const searchContact = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;

    const contact = database.filter((el) => el.name === name || el.gender === gender || el.email === email || el.phone === phone);

    if ( contact == null) {
        return res.status(200).json({ message: "Contactfound successfuly", data: contact})
    }
    return res.status(404).json({ message: "Contact not found", data: contact })
}


const deleteContact = async (req, res) => {
    const id = req.params.id;
    const contactIndex = database.findIndex((e) => e.id == id);
     database.splice(contactIndex, 1);
    await saveTODB(JSON.stringify(database, null, 2))
    saveTODB(JSON.stringify(database))
    res.status(200).json({
        message: "Contact deleted successfully"
    })
}


module.exports = {
    addContact,
    viewContact,
    updateContact,
    searchContact,
    deleteContact
}