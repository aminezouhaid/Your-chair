const { Schema,model } = require('mongoose');

const FactoreySchema = new Schema   (
    {

        order_id: {
            type: Schema.Types.ObjectId, ref:'orders' ,
            
        },

        
        user_id: {
            type: Schema.Types.ObjectId, ref:'users' ,
            
        },
        
        total: {
            type: Number,
            required: true
        },
  
    },
    {
        timestamps: true,
    }

);
module.exports = model("Factorey", FactoreySchema);