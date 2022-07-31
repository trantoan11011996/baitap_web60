const joi = require('joi')

//validate when register

function validateRegister(data){
    const schema = joi.object({
        name : joi.string().min(5).required(),
        age : joi.number().min(18).max(90).required(),
        address : joi.string().required(),
        gender : joi.string().valid('male','female','other'),
        phone : joi.string().regex(/[0-9]$/).min(10).max(12),
        email : joi.string().email().required(),
        password : joi.string().min(6).required(),
    })
    return schema.validate(data)
}
function validateProduct(data){
    const schema = joi.object({
        name : joi.string().required(),
        price : joi.string().required(),
        amount : joi.number().required(),
    })
    return schema.validate(data)
}
function validateLogin(data){
    const schema = joi.object({
        email : joi.string().email().required(),
        password : joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.validateRegister = validateRegister
module.exports.validateLogin = validateLogin
module.exports.validateProduct = validateProduct