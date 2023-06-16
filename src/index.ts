import './redis'
import express from 'express'
import appRouter from './router' 
import { engine } from 'express-handlebars';


const server = express()
server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './src/views');
 

server.use(appRouter)
 


server.listen(process.env.PORT || 80, () => { 
    console.log('online')
})