import express from "express";
import { customerRegister } from "../controller/customerController.js";

const customerRouter = express.Router();

customerRouter.post("/client",customerRegister);

export default customerRouter;