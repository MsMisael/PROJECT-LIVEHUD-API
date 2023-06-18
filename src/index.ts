import express from 'express'
import appRouter from './router'
import configHandlebars from './handlebars'
import configSession from './session'
import configureCors from './cors'

import './mongoose'
import './redis'

const server = express()

configHandlebars(server)
configSession(server)
configureCors(server)
server.use(appRouter)



server.listen(process.env.PORT || 80, () => {
    console.log('online')
})
