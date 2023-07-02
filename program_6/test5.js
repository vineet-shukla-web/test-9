var express=require('express');
var app=express();
app.get('/getData',(req,res)=>{
  //res.statusCode(200).send({'name':"vineet"})
    let data=req.query.data;
    let result=data*2;
    console.log(result);
    res.send({"data":result});
})
app.listen(8090,()=>{
    console.log('server listen on prot 8090');
})

// function test(){
//    const a=10;
//     function test1(){
//       console.log(a);
//     }
//     test1();
// }
// test();
