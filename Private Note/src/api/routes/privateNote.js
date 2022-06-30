import express from "express";
import {addNoteToDB} from "../../services/note.js";


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
        let noteInfo = await addNoteToDB(newNote)
        console.log(noteInfo.toString())
    }
    catch (err){

    }
})

router.get('/note', async (req, res) => {
    try {

    }
    catch (err){

    }
})


router.post('/note', async (req, res) => {
    try {

    }
    catch (err){

    }
})



export default router