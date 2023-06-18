import { Request, Response, NextFunction } from 'express'
import TwitchApiAdapter from '../twitch'


const get = (req: Request, res: Response) => {
    console.log('user')
    res.json(req.session.user)
}


export default { get }