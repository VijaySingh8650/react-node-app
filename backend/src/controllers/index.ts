import {Request, Response} from "express";
import {z} from "zod";
import {Book} from "../model";

let bookRequestBody = z.object({
    name: z.string(),
    author: z.string(),
    description: z.string(),
})

export const createBook = async(req:Request, res:Response) =>{
   try{

       let validateRequestBody = bookRequestBody.safeParse(req.body);
        if(!validateRequestBody?.success){
            return res.status(401).send({message:"Invalid Request Body"});
        }

        await Book.create({...req.body});
        return res.status(201).send({message:"Book Added!"})
        
    }
    catch(err){
       return res.status(500).send({message:"Something went wrong"})

   }
}

export const deleteBook = async(req:Request, res:Response) =>{
       try{

         let {id} = req.params;

          await Book.findByIdAndDelete({_id:id});
          return res.status(200).send({message:"Book Deleted!"})

       }
       catch(err){
        return res.status(500).send({message:"Something went wrong"})

       }
}

export const getBooks = async(req:Request, res:Response) =>{
    try{

     

       let data = await Book.find();
       return res.status(200).send({data});

    }
    catch(err){
     return res.status(500).send({message:"Something went wrong"})

    }
}