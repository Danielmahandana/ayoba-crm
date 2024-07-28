import express from "express";
import { addDeal } from "../controller/dealController.js";

const userRouter = express.Router();

userRouter.post("/deal",userRegister);

export default userRouter;