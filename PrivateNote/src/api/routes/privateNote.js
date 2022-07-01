import express from "express";
import {addNoteToDB, getNote, deleteNote} from "../../services/note.js";
import {config} from "../../config/config.js";


const router = new express.Router()

router.get('', async (req, res) => {
    try {
        return res.render('home.ejs')
    }
    catch (err){
        console.log(`Err: ${err}`)
    }
})

router.post('/createNote', async (req, res) => {
    try {
        let {newNote} = req.body
        let noteID = await addNoteToDB(newNote)
        let noteLink = `/private-note/note/${noteID}`
        return res.render('showLink', {noteLink})
    }
    catch (err){
        console.log(`Err: ${err}`)
    }
})

router.get('/note/:noteId', async (req, res) => {
    try {
        const {noteId} = req.params
        console.log(`in get note => ${noteId}`)
        const note = await getNote(noteId)
        console.log(note)
        if (note) {
            const createdAt = note.createdAt
            const now = new Date()
            const duration = (now - createdAt) / 1000
            console.log(duration)
            if (duration <= process.env.EXPIRE_TIME)
                return res.render('showWarning.ejs', {noteId})
        }
        else {
            const errorMessage = "There isn't note"
            return res.render('showError', {errorMessage})
        }
    }
    catch (err){
        console.log(`Err: ${err}`)
    }
})


router.post('/note/:noteId', async (req, res) => {
    try {
        const {noteId} = req.params
        console.log("in show note ", noteId)
        const note = await getNote(noteId)
        if (!note) {
            const errorMessage = "There isn't note"
            return res.render('showError', {errorMessage})
        }
        const content = note.content
        const deletedNote = await deleteNote(noteId)
        if (deletedNote)
            return res.render('showNote', {content})
    }
    catch (err){

    }
})



export default router