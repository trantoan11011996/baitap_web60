const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = mongoose.Schema({
    user: { type : Schema.Types.ObjectId, ref: "User" },
    orderItem : [
       {
        name : {
            type : String,
            require : true,
        },
        qty : {
            type : Number,
            require : true
        },
        image : {
            type : String,
            require : true
        },
        price : {
            type : Number,
            require : true
        },
        product : {type : Schema.Types.ObjectId, ref : "Product"}    
       }
    ],
    shippingAddress : {
        address : {
            type : String,
            require : true
        },
        city : {
            type : String,
            require : true
        },
        postalCode : {
            type : String,
            require : true
        },
    },
    paymentResult : {
        id : {
            type : String,
        },
        status : {
          type : String  
        },
        emmail_address : {
            type : String,
        },
        update_time : {
            type : String
        }
    },
    paymentMethod : {
        type : String,
        require : true
    },
    shippingPrice : {
        type : Number,
        require : true
    },
    totalPrice : {
        type : Number,
        require : true
    },
    isPaid : {
        type : Boolean,
        default : false,
        require : true
    }
})




const Orders = mongoose.model('Review',orderSchema)
module.exports = Orders