import express from "express";
import dotenv from "dotenv";    
import cors from "cors";
import connectDB  from "./db/database.js"
import reverseRoutes from "./routes/reverseRoutes.js";
const app = express()
connectDB()

dotenv.config({
    path :"./.env"
})

app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/res",reverseRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)    
})