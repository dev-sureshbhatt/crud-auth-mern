import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import dotenv from 'dotenv'

dotenv.config()



const app = express()
const MONGO = process.env.MONGO


app.listen(4000, ()=>{
    console.log("app listening")
})


mongoose.connect(process.env.MONGO).then(()=>{console.log("mongoose connected")}).catch((err)=>{console.log(err, "something went wrong connecting MONGOOSE")})

//middlewares

app.use(express.json())
app.use(cors()) 




//Routes

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


//error handler
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"
    res.statusCode(statusCode).json({
        "success": "false",
        message,
        statusCode
    })
})