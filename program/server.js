var express=require('express');

var app=express();
var port=3000;

app.get("/getdata",(req,res)=>{
    console.log("get");
    res.send("success")

});
app.listen(port,()=>{
    console.log(`listen port ${port}`);
})