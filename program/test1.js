var express=require("express");
var app=express();
var con=require('./db2.js');

app.get("/getApp",(req,res)=>{
    con.query("select * from tes23",(err,result)=>{
        if(err){
            console.log(err);
            res.send("failed");
        }
        res.send(result);
    }); 
});
app.listen(8080,()=>{
    console.log("listen on port 8080");
});