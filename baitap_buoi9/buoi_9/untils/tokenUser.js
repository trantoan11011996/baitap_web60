const jwt = require('jsonwebtoken')


const generateToken = (id)=>{
    return jwt.sign({id},'masobimat',{
        expiresIn : "1d"
    })
}

module.exports = {
    generateToken
}