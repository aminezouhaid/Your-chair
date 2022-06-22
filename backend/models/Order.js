const { Schema,model } = require('mongoose');

const OrderSchema = new Schema   (
    {

        user_id: {
            type: Schema.Types.ObjectId, ref:'users' ,
            
        },
       
        product_id:{
            type: Schema.Types.ObjectId, ref:'Product' ,
        },

       time:{type:String,
        required: true },
        
        
        status:{
            type:String,
            default:"Reserved",
            enum:["inprogress","Reserved"]
        },
     
    },
    {
        timestamps: true,
    }

);
module.exports = model("reservation", OrderSchema);