import express from 'express'

const appRouter = express.Router()

appRouter.get('/login', (req, res) => {
    res.render('login',{teste:1})
 })

export default appRouter    