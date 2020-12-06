import mongoose = require("mongoose"); 
import {IPost} from "../interfaces"

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    text:{type:String,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

export default mongoose.model<IPost>('Post',postSchema);