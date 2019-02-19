const http=require('http')
const path=require('path');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname))
        res.writeHead(200,{'content-type':"text/html"})
        res.end('<h1>Home</h1>')

    }
})

const PORT =process.env.PORT || 5000
server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
