/// xử lí các hàm logic

const User = require("../model/userModel")
const asyncHandler = require('express-async-handler')
const { generateToken } = require("../untils/tokenUser")
const bcrypt = require('bcryptjs')

/// gọi đến model - để tương tác với Database

// được router gọi đến, để định tuyến người dùng đến controller nào

const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, isAdmin } = req.body
    //check user
        const userExsit = await User.findOne({ email })
        if (userExsit) {
            res.status(402)
            throw new Error('user already exist')
        }
    const newUser = await User.create({ name, email, password,isAdmin })
    if (newUser) {
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token : generateToken(newUser._id)
        })
    }
    else {
        res.status(400)
        res.send('INVAID USER DATA')
        return
    }
})

const authLogin = asyncHandler(async function(req,res){
    // xu li logic login
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error('email or password invalid')
    }
})

const getUserProfile = asyncHandler(async(req,res)=>{

    const user = await User.findById(req.userInfo._id)
    if(user){
        res.json({
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
        })
    }else{
        res.status(401)
        throw new Error('user info not found')
    }
})

const updateUserProfile = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.userInfo._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password 
        }
        const updateUser = await user.save()
        res.json({
            _id : updateUser._id,
            name : updateUser.name,
            email : updateUser.email,
            isAdmin : updateUser.isAdmin
        })
    }else{
        res.status(401);
        throw new Error('user not found')
    }
})


const getAlluser = asyncHandler(async(req,res)=>{
    const user = await User.find({})
    res.json(user)
})

const deleteUser = asyncHandler(async(req,res)=>{
     const user = await User.findById(req.params.id)
     if(user){
        await user.remove();
        res.json({
            message : 'xóa thành công'
        })
     }
     else{
        res.status(400)
        throw new Error('lỗi')
     }
})

const getUserByid = asyncHandler(async(req,res)=>{
    await User.findById({
        _id: req.params.id
    }).exec((err, user) => {
        if (err) {
           res.status(400)
           throw new Error('user not found')
        } else {
            console.log('lay thanh cong user', user)
            res.json(user)
        }
    })
})


module.exports = {
    registerUser,
    authLogin,
    getUserProfile,
    updateUserProfile,
    getAlluser,
    deleteUser,
    getUserByid
}