import express from 'express'
const app = express()
import connection from './config/db.js'
import cors from 'cors'
import userRoutes from './routes/userRouter.js'
import adminRoutes from './routes/adminRouter.js'

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

app.use(express.urlencoded({ extended: true }))

app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

app.listen(5000, async()=>{
    await connection()
    console.log("server started")
})