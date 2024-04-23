import mongoose from "mongoose";


const BookSchema = new mongoose.Schema({
    name: {type: String, required:true},
    author: {type: String, required:true},
    description: {type: String, required:true},
})

export const Book = mongoose.model("Book", BookSchema);
