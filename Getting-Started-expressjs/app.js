const express =require('express');
const path =require('path')
const app =express();
const bodyParser=require('body-parser')

//  enable access to files
app.use('/public',express.static(path.join(__dirname,'static')));

// load files
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))
})
// params in url
app.get('/example/:name/:age',(req,res)=>{
    res.send(req.params.name)
})

app.listen(3000,()=>{
    console.log('Server Running')
})