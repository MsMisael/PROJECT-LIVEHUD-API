
import { Request, Response } from 'express'
import Grid from '../models/userGrids'

const get = async (req: Request, res: Response) => {

    const grid = await Grid.findOne({ ownerId: req.session.user?.id || '' }, { _id: 0, __v: 0 })

    if (grid) {
        res.json(grid.toObject({}))
    } else {
        res.json({})
    }
}

const store = async (req: Request, res: Response) => {
    const compareArrays = (a, b) =>
        a.length === b.length &&
        a.every((element, index) => element === b[index]);

    const properties = ['gridName', 'xGap', 'yGap', 'columns', 'rows', 'areas']

    if (compareArrays(Object.getOwnPropertyNames(req.body), properties)) {
        await Grid.findOneAndUpdate({ ownerId: req.session.user?.id || '' }, req.body).exec()

        const grid = await Grid.findOne({ ownerId: req.session.user?.id || '' }, { _id: 0, __v: 0 })
        if (grid) {
            res.json(grid.toObject({}))
        } else {
            res.json({})
        }

    } else {
        res.status(403).json({ msg: "objeto precisa contar estritamente as seguintes propriedades: " + JSON.stringify(properties) })
    }
}


const destroy = (req: Request, res: Response) => {
    res.json({})
}



export default { get, store, destroy }