import {Router} from 'express'

const appRouter = Router() 

appRouter.get('/',(req,res)=>{
    console.log('foi')
    res.json({})
})


export default appRouter    