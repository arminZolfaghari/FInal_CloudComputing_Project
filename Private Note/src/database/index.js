import mongoose from 'mongoose'
import {config} from '../config/config.js'

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
        // console.log(MONGO_URL_WITH_USER_PASS)
        // console.log(config.MONGO_URL)
        await mongoose.connect(config.MONGO_URL)
        // await MongoClient.connect(config.MONGO_URL, (err, db) => {
        //     if (err)
        //         console.log(err)
        // })
    }
    catch (err){
        console.log(err)
    }
}