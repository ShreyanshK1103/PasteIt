const express = require('express');
const notesController = require('./../Controllers/notesController');

const router = express.Router();

router
.route('/')
// .get(notesController.getAllNotes)
.post(notesController.createNotes); 

router 
.route('/FindNotes/:id')
.get(notesController.getNotes)
.delete(notesController.deleteNotes)
.patch(notesController.editNotes);

module.exports = router;
