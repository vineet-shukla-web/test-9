const express=require('express');
const reuestM=require("./middleware");
const EventEmitter=require('events');
var app=express();
var port=process.env.port|| 2000;
var event= new EventEmitter();

event.on("Checked",()=>{
    console.log("event emit");
});

app.get("/",reuestM,(req,res)=>{
    res.send("success API");
    event.emit("Checked");
});
app.listen(port,(req,res)=>{
    console.log("listen port" ,port)
});