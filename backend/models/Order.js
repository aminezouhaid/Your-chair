const { Schema,model } = require('mongoose');

const OrderSchema = new Schema   (
    {

        user_id: {
            type: Schema.Types.ObjectId, ref:'users' ,
            
        },
        liv_id: {
            default:null,
            type: Schema.Types.ObjectId, ref:'users' ,

        },
        orderItems: [
           {
               name: { type: String , required: true},
               email: { type: String , required: true},
               price: { type: Number , required: true},
               product: { 
                   type: Schema.Types.ObjectId, ref:'products' ,
                   required: true
                },
      
            }
        ],

       date:{type:Date,required: true },
        
        total: {
            type: Number,
            required: true
        },
        status:{
            type:String,
            default:"new",
            enum:["new","inprogress", "inliv","delivred","done"]
        },
     
    },
    {
        timestamps: true,
    }

);
module.exports = model("reservation", OrderSchema);