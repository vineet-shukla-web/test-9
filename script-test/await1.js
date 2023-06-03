const { resolve } = require("path");

var PromiseObj=new Promise((resolve,reject)=>{

    let x=1;
    if(x==0){
        resolve("ok");
    }else{
        reject("false");
    }
    // setTimeout(()=>{
    //  console.log("hello");
    // },1000)
});
PromiseObj.then((x)=>{
    console.log(x);

}).catch((err)=>{
    console.log(err)
})