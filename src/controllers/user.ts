import { Request, Response  } from 'express'


const get = (req: Request, res: Response) => {
    res.json(req.session.user)
}


export default { get }