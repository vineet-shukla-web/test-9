

let pr=new Promise((resolve,reject)=>{

   resolve("hello");

});

pr.then((result)=>{

    console.log(result);
}).catch((error)=>{

    console.log(error);
});