import { Express } from 'express'
import cors from 'cors'



function configureCors(server: Express) {
    var allowlist = ['http://localhost:8080', 'http://localhost:5173']
    var corsOptionsDelegate = function (req, callback) {
        var corsOptions;
        if (allowlist.indexOf(req.header('Origin')) !== -1) {
            console.log('teste')
            corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
        } else {
            corsOptions = { origin: false } // disable CORS for this request
        }
        callback(null, corsOptions) // callback expects two parameters: error and options
    }


    server.use(cors(corsOptionsDelegate))
}


export default configureCors