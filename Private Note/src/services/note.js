import Note from "../database/model/note.js";
import mongoose from "mongoose";


export async function addNoteToDB(content){
    const id = new mongoose.Types.ObjectId()
    const newNote = new Note(
        {
            _id: id,
            content,
            createdAt: new Date(),
            isDeleted: false
        }
    )
    await newNote.save((err, newNote) => {
        if (err)
            console.log(`Error in save new note`)
    })

    return id
}


export async function getNote(noteId) {
    return Note.findOne({
        _id: noteId,
        isDeleted: false
    });
}


export async function deleteNote(noteId) {
    const updatedNote = await Note.findOneAndUpdate(
        {_id: noteId},
        {$set: {isDeleted: true}},
        {new: true}
    )
    return !!updatedNote.isDeleted;
}