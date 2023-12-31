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
            prefix: "session:",
        }),
        secret: String(process.env.APP_SECRET),
        resave: true,
        saveUninitialized: true,
        cookie: { secure: !Boolean(process.env.DEVELOPMENT), maxAge: 2 * 60 * 60 * 1000, sameSite: 'none' }
    }))
}