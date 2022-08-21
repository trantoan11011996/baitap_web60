const mongoose = require('mongoose')
const { Schema } = mongoose
const Item = mongoose.Schema({
        qty : {
            type : Number,
            required : true,
            default : 0
        },
        name : {
            type : String,
            require : true,
        },
        image : {
            type : String,
            require : true,
        },
        price : {
            type : String,
            require : true
        },
        product : {type : Schema.Types.ObjectId, ref : "Product"}
})
const orderSchema = mongoose.Schema({
    user: { type : Schema.Types.ObjectId, ref: "User" },
    orderItem : [Item],
    // shippingAddress : {
    //     address : {
    //         type : String,
    //         required : true  
    //     },
    //     city : {
    //         type : String,
    //         required : true
    //     },
    //     postalCode : {
    //         type : String,
    //         required : true
    //     },
    // },
    paymentResult : {
        id : {
            type : String,
        },
        status : {
          type : Boolean,
          default : false  
        },
        emmail_address : {
            type : String,
        },
        update_time : {
            type : String
        }
    },
    // paymentMethod : {
    //     type : String,
    //     required : true
    // },
    // shippingPrice : {
    //     type : Number,
    //     required : true
    // },
    // totalPrice : {
    //     type : Number,
    //     required : true
    // },
    // isPaid : {
    //     type : Boolean,
    //     default : false,
    //     required : true
    // }
})




const Orders = mongoose.model('Order',orderSchema)
module.exports = Orders