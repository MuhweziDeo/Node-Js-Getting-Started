const path=require('path');


// logs file name
console.log(path.basename(__filename))

// logs dirname
console.log(path.basename(__dirname))

// file extension
console.log(path.extname(__filename))

// path object
console.log(path.parse(__filename))

// concatenate path
console.log(path.join(__dirname,'test','test.html'))