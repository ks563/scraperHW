const mongoose = require("mongoose");

//sets reference to schema constructor
const Schema = mongoose.Schema;

//uses scheam constructor to create object
const NoteSchema = new Schema({
    title: String,
    body: String
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;