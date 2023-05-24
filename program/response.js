var express=require('express');
var app=express();

app.get("/checkAdd",(req,res)=>{
    res.send("ok");
});

app.listen(3031,(req,res)=>{
    console.log("listen on 3031 port");
})