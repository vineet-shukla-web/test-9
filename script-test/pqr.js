const { resolve } = require("path");

pr1=new Promise((resolve,reject)=>{
    resolve("test1");
  //console.log("firest");
})

pr2=new Promise((resolve,reject)=>{
    //console.log("firest12");
    reject("test2");
})

Promise.all([pr1,pr2]).then((result)=>{

    console.log(result);
});