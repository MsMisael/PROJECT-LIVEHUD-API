import express from 'express'

const appRouter = express.Router()

appRouter.get('/login', (req, res) => {
    res.render('login', { title: 'Login', scopes: 'user:read:email', state: 'estado' })
})


appRouter.get('/callback', async (req, res) => {
    // const { data } = await TwitchApiAdapter.getToken(String(req.query.code))
    // const { data: user } = await TwitchApiAdapter.getUserFromToken(String(data.access_token))
    // res.cookie('token', jwt.sign({data},'asdasd'), { httpOnly: true })
    // console.log(res.)
    res.json({})
})

appRouter.get('/', (req, res) => {


    res.render('profile', {})
})

export default appRouter    