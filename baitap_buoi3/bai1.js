var fs = require('fs')

fs.readFile('bai1.json','utf8',function(err,data){
    if(err) throw err
    console.log(data)
})