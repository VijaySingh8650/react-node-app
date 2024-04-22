import { ErrorRequestHandler, Request, Response } from "express";

export const handleGlobalError = (err:ErrorRequestHandler, req:Request, res:Response) =>{
    return res.status(500).send({
         message: "Please send the valid data"
    })
};

export const notValidAPI = (req:Request, res:Response) =>{
    return res.status(401).send({message:"Invalid API"});
}