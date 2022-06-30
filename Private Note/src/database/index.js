import mongoose from 'mongoose'
import {config} from '../config/config.js'


const connectOption = {
    autoReconnect: true,
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}



export default async function connectToDB() {
    try {
        mongoose.Promise = global.Promise
        await mongoose.connect(config.MONGO_URL)
    }
    catch (err){
        console.log(err)
    }
}