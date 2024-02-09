import  mongoose  from "mongoose";
import validator from "validator"


const reserveSchema = new mongoose.Schema({
    firstName:{
        type :String,
        minLength :[3,"Name should be atleast 3 words !"],
        requried : true,
        trim:true
    },
    lastName:{
        type :String,
        minLength :[3,"Name should be atleast 3 words !"],
        requried : true,
        trim:true
    },
    email:{
        type:String,
        requried :true,
        validate:[validator.isEmail,"Please enter a valid email !"]

    },
      phone:{
        type :Number,
        requried : true,
    
    },

},{timestamps:true})

const ReserveModel = mongoose.model("Reserve",reserveSchema)

export default  ReserveModel;