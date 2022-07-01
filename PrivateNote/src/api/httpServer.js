import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes/index.js';
import {fileURLToPath} from "url";
import {dirname} from "path";

const app = express()



// set views
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);


const httpServer = http.createServer(app)
const startServer = (port) => {
    httpServer.listen(port, () => {
        console.log("Server is running")
        console.log(`Listening on ${port}`)
    })
}



export default startServer
