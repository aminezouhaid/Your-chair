const {Schema, model}= require('mongoose');
const UserSchema = new Schema (
    {
        name : {
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        },
        role:{
            type:String,
           
            enum:["user","admin"]
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        
        phone:{
            type:String,
            required:true
        },

      
    },
    {
        timestamps: true,
    }
);
module.exports = model("users",UserSchema);