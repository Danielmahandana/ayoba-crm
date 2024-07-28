import express from "express";
import { addDeal } from "../controller/dealController.js";

const dealRouter = express.Router();

dealRouter.post("/deal",addDeal);

export default dealRouter;