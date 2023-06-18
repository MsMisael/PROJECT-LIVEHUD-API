import express from 'express'
import auth from '../controllers/auth'
import user from '../controllers/user'

const appRouter = express.Router()

appRouter.get('/login', auth.login)
appRouter.get('/callback', auth.callback)
appRouter.use(auth.middleware)

appRouter.get('/api/user', user.get)

appRouter.get('/', (req, res) => {
    console.log(req.session.claims)
    res.render('profile',
        {
            name: req.session.user?.display_name,
            email: req.session.user?.email,
            profile_pic: req.session.user?.profile_image_url
        })
})

export default appRouter    