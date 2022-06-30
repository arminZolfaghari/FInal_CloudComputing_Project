import mongoose from "mongoose"



const NoteSchema = new mongoose.Schema(
    {
        content: String,
        createdAt: Date,
        isDeleted: Boolean
    }
)


export default mongoose.model('Note', NoteSchema)