import { Express } from 'express'
import session from 'express-session'
import RedisStore from "connect-redis" 
import redis from '../redis'

export default function configSession(server: Express,) {
    server.set('trust proxy', 1)
    server.use(session({
        // @ts-ignore
        store: new RedisStore({
            client: redis,
            prefix: "sessions:",
        }),
        secret: String(process.env.APP_SECRET),
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 2 * 60 * 60 * 1000 }
    }))
}