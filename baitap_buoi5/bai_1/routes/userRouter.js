const express = require('express')
const joi = require('joi')
const userRouter = express.Router()

const userData = [
    {
        id: 1, name: 'Nguyen Tuan Anh', phoneNumber: '098721245', email: 'victory1080@gmail.com', gender: 'boy', age: 31 
    },
    {
        id: 2, name: 'Trần Minh Toàn', phoneNumber: '0867576851', email: 'victory1996@gmail.com', gender: 'boy', age: 26 
    },
]

userRouter.get('/',function(req,res){
    res.send(userData)
})

userRouter.post('/',function(req,res){
    const {error}  = validationUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const newUser = {
        id : userData.length + 1,
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        gender : req.body.gender,
        age : req.body.gender,
    }
    userData.push(newUser)
    res.send(userData)
})


function validationUser(user){
    const option = ['nam','nữ','không xác định']
    const schema = joi.object({
        name : joi.string().regex(/[^0-9]$/).min(15).required(),
        phoneNumber : joi.string().pattern(new RegExp('^[0-9]{3,30}$')).min(10).max(12),
        email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        age : joi.number().max(200),
        gender : joi.compile(option)
    })
    return schema.validate(user)
}


module.exports = userRouter
