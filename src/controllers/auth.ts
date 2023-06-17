import { Request, Response, NextFunction } from 'express'
import TwitchApiAdapter from '../twitch'


const login = (req: Request, res: Response) => {
    res.render('login', { title: 'Login', scopes: 'user:read:email', state: 'estado' })
}

const callback = async (req: Request, res: Response) => {
    const { data } = await TwitchApiAdapter.getToken(String(req.query.code))
    const { data: { data: user } } = await TwitchApiAdapter.getUserFromToken(String(data.access_token))
    req.session.user = user[0]
    req.session.auth = data
    res.redirect('./')
}

const middleware = (req: Request, res: Response, next: NextFunction) => {

    if (req.session.auth && req.session.user) {

        next()
    } else {
        res.redirect('./login')
    }
}




export default { login, callback, middleware }