import express from 'express';
const Router = new express.Router();

import privateNoteRoutes from './privateNote.js'



Router.use('/private-note', privateNoteRoutes)


export default Router