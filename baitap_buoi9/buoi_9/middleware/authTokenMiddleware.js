// kiểm tra token có hợp lệ hay không 
// có gởi token lên hay không
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');
const User  = require('../model/userModel');

const protect = asyncHandler(async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        // check token có thật sự hợp lệ hay không
        try {
            /// bearer abc.xyz.def
            const token = req.headers.authorization.split(' ')[1]
            //=>['bearer','chuỗi token'] => lấy được token ( ở vị trí số 1)
            const userVerify = jwt.verify(token, 'masobimat')
            console.log('user verify', userVerify)
            // lấy ra thông tin người dùng bỏ đi trường pass
            const userInfo = await User.findById(userVerify.id).select('-password')
            console.log('user-info', userInfo)
            req.userInfo = userInfo
            next()
        } catch (error) {
            res.status(401);
            throw new Error('token invalid')
        }
    } else {
        res.status(401);
        throw new Error('not authorization, no token or token invalid')
    }
})

const checkAdmin = asyncHandler(async(req,res,next)=>{
    const user = req.userInfo
    if(user && user.isAdmin){   
        next()
    }
    else{
        res.status(401)
        throw new Error('Not admin')
    }
})



module.exports = {
    protect,
    checkAdmin
}