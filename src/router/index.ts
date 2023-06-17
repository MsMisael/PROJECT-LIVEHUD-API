import express from 'express'
import TwitchApiAdapter from '../twitch'

const appRouter = express.Router()

appRouter.get('/login', (req, res) => {
    res.render('login', { title: 'Login', scopes: 'user:read:email', state: 'estado' })
})


appRouter.get('/callback', async (req, res) => {
    const { data } = await TwitchApiAdapter.getToken(String(req.query.code))
    const { data: { data: user } } = await TwitchApiAdapter.getUserFromToken(String(data.access_token))
    console.log(user)
    req.session.user = user[0]
    req.session.auth = data
    res.redirect('./')
})

appRouter.get('/', (req, res) => {
    console.log(req.session)

    res.render('profile', { name: req.session.user?.display_name, email: req.session.user?.email, profile_pic: req.session.user?.profile_image_url })
})

export default appRouter    