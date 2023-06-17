import redis from './redis'
import express from 'express'
import appRouter from './router'
import { engine } from 'express-handlebars';
import session from 'express-session'
import RedisStore from "connect-redis"

const server = express()

server.set('trust proxy', 1)

server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './src/views');

server.use(
    session({
        // @ts-ignore
        store: new RedisStore({
            client: redis,
            prefix: "sessions:",
        }),
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
)

server.use(appRouter)



server.listen(process.env.PORT || 80, () => {
    console.log('online')
})