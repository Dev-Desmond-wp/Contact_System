const express = require('express') 
const router = express.Router()

const {addContact, viewContact, updateContact, searchContact, deleteContact} = require('../controllers/contactController')

router.post('/addcontact', addContact);
router.get('/viewcontact', viewContact);
router.put('/updatecontact/:id', updateContact);
router.get('/searchcontact', searchContact);
router.delete('/deletecontact/:id', deleteContact);

module.exports = router