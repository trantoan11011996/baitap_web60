const express = require('express')
const joi = require('joi')
const router = express.Router()
const usersModel = require('../model/users')

///create user
router.post("/",function(req,res){
  const {body} = req
  const {error}  = validateUser(req.body)
  if(error) return res.status(404).send(error.details[0].message)
  const user = new usersModel()
  user.name = req.body.name,
  user.age = req.body.age,
  user.address = req.body.address,
  user.gender = req.body.gender,
  user.phone = req.body.phone,
  user.email = req.body.email,

  user.save((err,user)=>{
    if(err){
      console.log('err',err)
      res.send('error')
    }
    else{
      console.log('user',user)
      res.send(user)
    }
  })
})
/// get all user
router.get('/',function(req,res){
  usersModel.find({}).exec(function(err,users){
    if(err){
      res.send(err)
    }
    else{
      console.log('get all data sucess',users)
      res.json(users)
    }
  })
})

// update base on id user
router.put('/id/:id',function(req,res){
  usersModel.findByIdAndUpdate({
    _id : req.params.id
  },
  {
   name : req.body.name 
  },
  function(err,user){
    if(err){
      res.send(err)
    }
    else{
      res.send(user)
    }
  })
})
// update base on phone user
router.put('/phone/:phone',function(req,res){
  usersModel.findByIdAndUpdate({
    phone : req.params.phone
  },
  {
   name : req.body.name 
  },
  function(err,user){
    if(err){
      res.send(err)
    }
    else{
      res.send(user)
    }
  })
})
// delete user by id
router.delete("/id/:id",function(req,res){
  usersModel.findByIdAndDelete({
    _id : req.params.id
  },
  function(err,user){
    if(err){
      res.send(`can't delete`)
    }
    else{
      res.send(user)
    }
  })
})

//validate 
function validateUser(user){
  const schema = joi.object({
    name : joi.string().regex(/[^0-9]$/),
    age : joi.number().min(18).max(100),
    address : joi.string(),
    gender : joi.string().valid('male','female','other'),
    phone : joi.string().regex(/[0-9]$/).min(10).max(12),
    email : joi.string().email()
  })
  return schema.validate(user)
}
module.exports = router

