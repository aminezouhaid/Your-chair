const { Schema,model } = require('mongoose');
const CategorySchema = new Schema   (
    {

        name: {
            type: String,
            required: true,
        }
        

        // user_id: 
        // { 
        //     type: Schema.Types.ObjectId, ref:'users' 
        // }
    }

);
module.exports = model("categories", CategorySchema);