
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/index"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1><b>This is homepage</b></h1>")
       return res.end()
    }
    if(req.url === "/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1><b>name : Tran Minh Toan , gender : male</b></h1>")
        return res.end()
    }
    else{
        res.end('<h1>404 not found</h1/>')
    }
})

server.listen(5000)