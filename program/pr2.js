
var pr=new Promise((resolve,reject)=>{

    reject("hhh")
});

pr.then((x)=>{

    console.log(x);
}).catch((err)=>{
  console.log(err);
})