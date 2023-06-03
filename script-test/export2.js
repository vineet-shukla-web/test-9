// var app=require('http');
var express=require('express');
var app=express();
var {data}=require('./export');

// app.createServer((req,res)=>{
//     console.log("gggggg")
//    // res.setHeader()
//     res.writeHead(200,{'content-type':'application.json'})
//     res.write(JSON.stringify(data));
//     res.end();
app.listen(3001,()=>{
    console.log(data);
    console.log("port")
});

// }).listen(8085);