
pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolve1")
    },1000)
});
pr2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolve2")
    },2000)
   
});
Promise.all([pr1,pr2]).then((x)=>{
   console.log("========"+x);
}).catch((err)=>{
    console.log(err);
});
// pr1=new Promise((resolve,reject)=>{
//     resolve("hello")
// });
// pr2=new Promise((resolve,reject)=>{
//     resolve("resolve2")
// });
// //========
// // Promise.allSettled([pr1,pr2]).then((x)=>{
// //     console.log("========"+x);
// })