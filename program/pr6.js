var express=require('express');
var app=express();


var requestTime = function (req, res, next)
{
    console.log(req)
 if(req.params.id){
    next()
 }else{
    res.send(401, 'Unauthorized')
 }
}
app.use(requestTime);

app.get("/getApp/:id",requestTime,(req,res)=>{
    console.log(req.originalUrl);
    //console.log(req.baseUrl)
    var result=req.params.id
    res.send(result);

});

app.listen(8080);