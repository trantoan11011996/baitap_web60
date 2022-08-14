const mongoose = require('mongoose')
const {Schema} = mongoose
const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
        default : 10,
        min : 1,
        max : 10
    },
    comment: {
        type: String,
        require: true
    },
    user: { type : Schema.Types.ObjectId, ref: "User" },
    product : {type : Schema.Types.ObjectId, ref : "Product"}
})




const Reviews = mongoose.model('Review',reviewSchema)
module.exports = Reviews