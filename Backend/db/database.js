import mongoose from "mongoose";
import dotenv from "dotenv";    
dotenv.config({
    path :"./.env"
})

const connectDB =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("database is connected"))
    .catch(()=>console.log("failed to connect"))

}
export default connectDB;