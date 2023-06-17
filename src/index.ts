import express from 'express'
import session from 'express-session'
import RedisStore from "connect-redis" 

import redis from './redis'
import appRouter from './router'
import configHandlebars from './handlebars'

const server = express()

server.set('trust proxy', 1)
 
configHandlebars(server)

server.use(
    session({
        // @ts-ignore
        store: new RedisStore({
            client: redis,
            prefix: "sessions:",
        }),
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false,maxAge: 2*60*60*1000 }
    })
)

server.use(appRouter)



server.listen(process.env.PORT || 80, () => {
    console.log('online')
})