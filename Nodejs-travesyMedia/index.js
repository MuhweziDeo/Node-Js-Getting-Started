const http=require('http')
const path=require('path');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //       res.writeHead(200,{'content-type':"text/html"})
    //       res.end(content)
    //     })


    // }

    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //       res.writeHead(200,{'content-type':"text/html"})
    //       res.end(content)
    //     })


    // }

    // if(req.url === '/api/users'){
    //     const users=[
    //         {name:"derr",age:22},
    //         {name:'dee',age:23}
    //     ]
    //     res.writeHead(200,{'content-type':"application/json"})
    //     res.end(JSON.stringify(users))

    // }

// build file path

 let filePath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url) 
// extension of file
let extname=path.extname(filePath)
 let contentType='text/html';
//  check for file types 
 switch(extname){
     case('.js'):
     contentType="text/javascript";
     break;
     case ('.css'):
     contentType="text/css";
     break;
     case('.json'):
     contentType="application/json";
     break
 }
//  read file
fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code=='ENOENT'){
            // page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                res.writeHead(200,{'content-type':'text/html'})
                res.end(content,'utf8')
            })
        }
        else{
            // server error
            res.writeHead(500);
            res.end(`server error:${err.code}`)
        }
         
    }
      else{
        res.writeHead(200,{'content-type':'text/html'})
        res.end(content,'utf8')
         }
})

})

const PORT =process.env.PORT || 5000
server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
