import express from 'express'
import auth from '../controllers/auth'
import user from '../controllers/user'
import grid from '../controllers/grid'

const appRouter = express.Router()

appRouter.get('/logout', auth.logout)
appRouter.get('/callback', auth.callback)

appRouter.use(auth.middleware)

appRouter.get('/api/user', user.get)

appRouter.get('/api/grid/', grid.get)
appRouter.post('/api/grid/', grid.store)
appRouter.delete('/api/grid/:id', grid.destroy)

export default appRouter    