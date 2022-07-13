const express = require('express')

const userRouter = express()

let users = [
    {
        id : 1,
        name : "Tran Minh Toan"
    },
    {
        id : 2,
        name : "Nguyen Tuan Anh"
    },
    {
        id : 3,
        name : "Lionel Messi"
    },
    {
        id : 4,
        name : "Stephen Curry"
    }
]

// get all user
userRouter.get('/',function(req,res){
    res.send(users)
})

/// create new user
userRouter.post('/',function(req,res){
    const newUser = {
        id  : users.length + 1,
        name : req.body.name
    }
    users.push(newUser)
    res.send(users)
})

// edit user
userRouter.put('/',function(req,res){
    let userEdit = users.map(item=>{
        if(item.id === req.body.id){
            return{
                id : item.id,
                name : req.body.name
            }
        }
        return item
    })
    users= userEdit
    res.send(userEdit)
})

//delete user
userRouter.delete('/',function(req,res){
    let removeUsers = users.filter(item=>item.id !== req.body.id) 
    users=removeUsers  
    res.send(removeUsers)
})
module.exports = userRouter