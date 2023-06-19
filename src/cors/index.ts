import { Express } from 'express'
import cors from 'cors'



function configureCors(server: Express) {
    var allowlist = [String(process.env.WEB_CLIENT_URL)]
    var corsOptionsDelegate = function (req, callback) {
        var corsOptions: cors.CorsOptions;
        if (allowlist.indexOf(req.header('Origin')) !== -1) {
            corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
        } else {
            corsOptions = { origin: false } // disable CORS for this request
        }
        callback(null, corsOptions) // callback expects two parameters: error and options
    }


    server.use(cors(corsOptionsDelegate))
}


export default configureCors