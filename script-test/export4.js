var export1 = require('./export3');
var pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise_1==========")
    },2000);
});
var pr2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error")
    },1000);
});
Promise.allSettled([pr1,pr2]).then((result)=>{
  // console.log(result[0]);
  // console.log(result[1]);
  console.log(result);
}).catch((err)=>{
  console.log(err);
});

Promise.race([pr1,pr2]).then((result)=>{
  // console.log(result[0]);
  // console.log(result[1]);
  console.log(result);
}).catch((err)=>{
  console.log(err);
});

