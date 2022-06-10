// const { default: mongoose } = require('mongoose');
const { Schema,model } = require('mongoose');

// const ReviewSchema = new Schema (
//     {

//         name: {
//             type: String,
//             required: true,
//         },
//         rating: {
//             type: Number,
//             required: true
//         },
//         comment: {
//             type: String,
//             required: true
//         },
//         category: {
//             type: Schema.Types.ObjectId, ref:'users',
//             required: true
//         }
//     },
//     {
//         timestamps: true,
//     }

// );

const ProductSchema = new Schema   (
    {

        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        image_cover: {
            type: String,
            required: false
        },
        category: {
            type: Schema.Types.ObjectId, ref:'categories' ,
            required: false
        },

       
        // reviews: [ReviewSchema],
        // rating: {
        //     type: Number,
        //     required: true,
        //     default: 0
        // },
        // numReviews: {
        //     type: Number,
        //     required: true,
        //     default: 0
        // },
        // countInStock : {
        //     type: Number,
        //     required: true,
        //     default: 0
        // }

    },
    {
        timestamps: true,
    }

);
module.exports = model("Product", ProductSchema);

// exports default Product;