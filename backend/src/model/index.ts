import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    title: {type: String, required: true},
    class: {type: String, required: true},
    num:{type: Number, required: true},
})

export const User = mongoose.model("User", UserSchema);