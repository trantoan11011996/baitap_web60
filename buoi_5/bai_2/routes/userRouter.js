const express = require('express')
const Joi = require('joi')
const userRouter = express.Router()

userRouter.post("/",function(req,res){
    const {body} = req
    console.log(body.gender)
    const {error}  = validateUser(req.body)
    if(error) return res.status(404).send(`<h1>${error.details[0].message}</h1>`)
    res.render("user",{body})
})



function validateUser(data){
    const schema = Joi.object({
        firstname : Joi.string().regex(/[^0-9]$/),
        lastname : Joi.string().regex(/[^0-9]$/),
        email: Joi.string().email(),
        date : Joi.date().min('2-1-1999'),
        gender :Joi.string(),
        phone : Joi.string().regex(/[0-9]$/).min(10).max(12),
        subject : Joi.string()
    })
    return schema.validate(data)
}
module.exports = userRouter