const express = require('express') 
const router = express.Router()

const {addContact, viewContact, updateContact, searchContact, deleteContact} = require('../controllers/contactController')

const logger = require('../middleware/logger.js')

router.post('/addcontact', logger, addContact);
router.get('/viewcontact', logger, viewContact);
router.put('/updatecontact/:id', logger, updateContact);
router.get('/searchcontact', logger, searchContact);
router.delete('/deletecontact/:id', logger, deleteContact);

module.exports = router