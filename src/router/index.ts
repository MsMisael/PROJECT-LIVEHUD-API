import express from 'express'
import auth from '../controllers/auth'
import user from '../controllers/user'

const appRouter = express.Router()

appRouter.get('/logout', auth.logout)
appRouter.get('/callback', auth.callback)

appRouter.use(auth.middleware)

appRouter.get('/api/user', user.get)



export default appRouter    