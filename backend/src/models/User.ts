import mongoose = require('mongoose');
import {IUser} from "../interfaces"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

export default mongoose.model<IUser>('User',userSchema);