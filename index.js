const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
const candidateRoutes = require("./routes/candidateRoutes")
app.use(express.json())

app.use("/api",candidateRoutes)

connectDB(process.env.MONGO_URL)
.then(
    ()=>{
        console.log("Database connected")
        app.listen(3000,()=>{
            console.log("server is running")
        })
    }
)
.catch((error)=>{
    console.log(error)
})

