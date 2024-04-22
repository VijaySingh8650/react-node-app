import mongoose from "mongoose";

export const connectDB = () =>{
    return mongoose.connect(process.env.MONGO_URL as string).then(()=>{
       console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })
}