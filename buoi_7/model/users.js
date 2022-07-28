const mongoose = require('mongoose')

const schema = mongoose.Schema

/// khai báo lược đồ

const usersSchema = new schema({
    name : String,
    age : Number,
    address : String,
    gender : String,
    phone : String,
    email : String,
})

module.exports = mongoose.model('users',usersSchema)