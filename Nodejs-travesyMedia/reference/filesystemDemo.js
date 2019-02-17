const path=require('path');

const fs=require('fs')

// create folder
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err) throw err
    console.log('folder created')
})

// wrtite file
fs.writeFile(path.join(__dirname,'/test','test.txt'),'heello   ',err=>{
    if(err) throw err
    console.log('created')

    // append file
    fs.appendFile(path.join(__dirname,'/test','test.txt'),'heello',err=>{
        if(err) throw err
        console.log('created')
    })
})

// read file

fs.readFile(path.join(__dirname,'/test','test.txt'),'utf8',(err,data) => {
    if(err) throw err
    console.log(data)
})

// rename file

fs.rename(path.join(__dirname,'/test','test.txt'),path.join(__dirname,'/test','testnew.txt'),err=>{
    if(err) throw err
    console.log('file renamed')
})