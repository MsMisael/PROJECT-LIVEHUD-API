import './redis'
import express from 'express'
import appRouter from './router' 


const server = express()


server.use(appRouter)


server.listen(process.env.PORT || 80, () => { 
    console.log('online')
})