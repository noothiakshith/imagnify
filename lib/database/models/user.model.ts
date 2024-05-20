import { Schema, model,Model, models } from "mongoose";

const UserSchema = new Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:true
    },
    planId:{
        type:Number,
        default:1
    },
    creditBalance:{
        type:Number,
        default:10
    }
})

const User = models?.User||model("User",UserSchema);
export default User;