import startServer from './api/httpServer.js'
import {config} from './config/config.js'
import connectToDB from "./database/index.js";


async function init(){
    await connectToDB();
    startServer(config.WEB_PORT)
}


init().then(async () => {

})