const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require:true,
    },
    review : [{type : Schema.Types.ObjectId, ref : "Review"}],
    numReview : {
        type : Number,
        require : true
    },
    countInStock : {
        type : Number,
        require : true,
    },
    price : {
        type : Number,
        require : true,
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports =  Product
