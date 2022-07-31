const mongoose = require('mongoose')


const usersSchema = mongoose.Schema({
    name : String,
    age : Number,
    address : String,
    gender : String,
    phone : String,
    email : String,
    password : String,
})

const productsSchema = mongoose.Schema({
    name : String,
    price : String,
    amount : Number,
})

module.exports.users = mongoose.model('users',usersSchema)
module.exports.products = mongoose.model('products',productsSchema)
