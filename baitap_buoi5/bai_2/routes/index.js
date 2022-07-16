const express = require('express')

const indexRouter = express.Router()

indexRouter.get("/",function(req,res){
    const header = "bài tập 2 buổi 5--validate user"
    res.render('index',{header:header})
})
module.exports = indexRouter