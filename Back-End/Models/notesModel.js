const mongoose = require('mongoose');


const notesSchema = new mongoose.Schema({
    // dateUploaded : {
    //     type: Date,
    //     default: Date.now(),
    //     select: false,
    // },
    text : {
        type: String,
        required: [true, 'A Note must have a text']
    }

})

const Notes = mongoose.model('Notes',notesSchema);

module.exports = Notes;

