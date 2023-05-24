const fs = require('fs'); 

const data = fs.readFile('hello.txt', 'utf-8', function(err, result){ 
    if(err){ 
        console.log(err) 
    } else { 
        console.log(result) 
    } 
});