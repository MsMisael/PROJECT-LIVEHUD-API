import { Request, Response, NextFunction } from 'express'
import TwitchApiAdapter from '../twitch'
import User from '../models/userData'


const logout = (req: Request, res: Response) => {
    req.session.destroy(() => {

    })
    res.redirect(String(process.env.WEB_CLIENT_URL))
}

const callback = async (req: Request, res: Response) => {
    const { data } = await TwitchApiAdapter.getToken(String(req.query.code))
    const { data: { data: user } } = await TwitchApiAdapter.getUserFromToken(String(data.access_token))

    let userData = await User.findOne({ id: user[0].id })

    if (!userData) {
        userData = await User.create({ id: user[0].id, hasStreamUpListener: false })

    }
    req.session.claims = userData
    req.session.user = user[0]
    req.session.auth = data
    res.redirect(String(process.env.WEB_CLIENT_URL))
}

const middleware = (req: Request, res: Response, next: NextFunction) => {

    if (req.session.auth && req.session.user) {

        next()
    } else {
        res.status(401).send()
    }
}

const login = (req: Request, res: Response) => {

    res.redirect(`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${process.env.TWITCH_CLIENT_ID}&redirect_uri=${process.env.WEB_SERVICE_URL}/callback&scope=${'user:read:email'}`)
}



export default { login, logout, callback, middleware }