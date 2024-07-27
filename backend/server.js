import express from "express";
import cors from "cors";
import  { connDB } from "./config/config.js";
import userRouter from "./routes/userRoutes.js";

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

// http method to request data from server
app.get('/', (req, res) => {
    res.send("API Working");
})

// run express server
app.listen(port,() => {
    console.log(`server listening on port http://localhost:${port}`);
})