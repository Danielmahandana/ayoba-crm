import express from "express";
import cors from "cors";
import  { connDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import dealRouter from "./routes/dealRoutes.js";
import customerRouter from "./routes/customerRoutes.js";
import 'dotenv/config'

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// database connection
connDB();

// api endpoint
app.use("/api/user",userRouter);
app.use("/api/deal",dealRouter);
app.use("/api/client",customerRouter);

// http method to request data from server
app.get('/', (req, res) => {
    res.send("API Working");
})

// run express server
app.listen(port,() => {
    console.log(`server listening on port http://localhost:${port}`);
})