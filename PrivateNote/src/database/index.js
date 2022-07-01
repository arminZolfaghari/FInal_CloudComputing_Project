import mongoose from 'mongoose'
import {config} from '../config/config.js'
import os from 'os'

import {MongoClient} from 'mongodb'

const connectOption = {
    useNewUrlParser: true,
    user: config.DB_USER,
    pass: config.DB_PWD
}



export default async function connectToDB(uri, callback) {
    try {
        mongoose.Promise = global.Promise
        // const MONGO_URL = config.MONGO_URL
        // const MONGO_URL_WITH_USER_PASS = MONGO_URL.substring(0, 10) + config.DB_USER + ":" + config.DB_USER + "@" + MONGO_URL.substring(10, MONGO_URL.length)
        // console.log(`MongoDB URL: ${MONGO_URL_WITH_USER_PASS}`)

        // const MONGO = `mongodb://${process.env.DB_USER || "admin1"}:${process.env.DB_PASS || "admin1"}@${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || "private_note"}?authSource=admin&w=majority&readPreference=primary`
        const MONGO = `mongodb://${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || "private_note"}`

        console.log(MONGO)
        await mongoose.connect(MONGO)
    }
    catch (err){
        console.log(err)
    }
}