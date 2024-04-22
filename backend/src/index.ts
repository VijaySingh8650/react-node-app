import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AppRouter from "./router";


dotenv.config();

import { handleGlobalError, notValidAPI } from "./global-errors";
import { connectDB } from "./database";


const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
}));

app.use(express.json());

app.use("/api", AppRouter);

app.use("*", notValidAPI);

app.use(handleGlobalError);



app.listen(process.env.PORT, async()=>{
    await connectDB();
    console.log(`Running on a port ${process.env.PORT}`);
})

