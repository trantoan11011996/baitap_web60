const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    isAdmin: {
        type: Boolean, required: true, default: false
    },
    product: [{ type: Schema.Types.ObjectId, ref: "Product" }]
})


userSchema.pre('save', async function (next) {
    /// ma hoa pass truoc khi luu vao database
    if (!this.isModified('password')) return next() // check khi người dùng đổi password 
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (err) {
        return next(err)
    }
})

const User = mongoose.model('User', userSchema)


module.exports = User
