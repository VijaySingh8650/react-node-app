import { Request, Response } from "express";
import {z} from "zod";
import { User } from "../model";


let verifyRequestBody  = z.object({
    title: z.string(),
    class: z.string()
})

export const schoolData = async(req:Request, res:Response) =>{
    try{

        let verifyData = verifyRequestBody.safeParse(req.body);

        if(!verifyData?.success){
            return res.status(400).send({message:"Invalid data"});
        } 
        
        await User.create({...req.body});
        return res.status(201).send({message:"Created"});
    }
    catch(err:any){
        return res.status(500).send({message:"Something went wrong", error: err?.message});
    }
}

export const getSchoolData = async(req:Request, res:Response) =>{
    try{
         
        let data  = await User.find();
        return res.status(200).send({data:data, message:"successfully"});



    }
    catch(err:any){
        return res.status(500).send({message:"Something went wrong", error: err?.message});
    }
}


export const updateSchoolData = async(req:Request, res:Response) =>{
    try{
         
        let {id} = req.params;
        console.log(id, req.body);
        
        let data  = await User.findByIdAndUpdate({_id:id}, { $set: { ...req.body}}, {returnOriginal: false});
        return res.status(201).send({data:data, message:"successfully"});



    }
    catch(err:any){
        return res.status(500).send({message:"Something went wrong", error: err?.message});
    }
}

export const filterSchoolData = async(req:Request, res:Response) =>{
    try{
         
       
        
        let data  = await User.find({$or :[{num: 23}, {num:3}]});
        return res.status(201).send({data:data, message:"successfully"});



    }
    catch(err:any){
        return res.status(500).send({message:"Something went wrong", error: err?.message});
    }
}