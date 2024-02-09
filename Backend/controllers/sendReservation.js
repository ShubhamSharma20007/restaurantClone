
import ReserveModel from "../Schema/reserveSchema.js"

const ReserveValueRoute = async(req,res)=>{
    const {firstName,lastName,email,phone} = req.body;
  try {
    const postReserve = await ReserveModel.create({
        firstName,
        lastName,
        email,
        phone
        
    })
    const result =  await postReserve.save();
    return res.status(200).json({success : true, result})
  } catch (error) {
    return res.status(500).json({message:error.message})
  }

    
    
}
export default ReserveValueRoute;