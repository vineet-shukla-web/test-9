var express=require('express');
var app=express();
var con=require('./db.js');


app.get('/test',(req,res)=>{
    var date=new Date();
    //var result=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    con.query("select * from vod_app_interest",(err,result)=>{
        if(err){
            console.log(err);
            res.send("failed");
        }
        res.send(result);
    });
    //res.send(result);
});

app.listen(8090,()=>{
    console.log('server running on port',8090);
});