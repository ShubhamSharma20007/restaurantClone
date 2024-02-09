import express from "express";
import ReserveValueRoute from "../controllers/sendReservation.js"
const router  = express.Router();

router.post("/send",ReserveValueRoute)



export default router;