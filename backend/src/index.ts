import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

import { handleGlobalError, notValidAPI } from "./global-errors";
import { connectDB } from "./database";


const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "https://chimerical-begonia-e2b17c.netlify.app"],    
}));

app.use(express.json());


app.use("*", notValidAPI);

app.use(handleGlobalError);



app.listen(process.env.PORT, async()=>{
    await connectDB();
    console.log(`Running on a port ${process.env.PORT}`);
})

