
//callback

// function add (cb){
//     cb('hell');
// }

// function test(){
//     add((cb)=>{
//         console.log("callback result",cb);
        
//         });
// }
// test();


// let pr=new Promise((resolve,reject)=>{
// setTimeout(()=>{
    
//     resolve('success1');
// },2000);
// });

// pr.then((x)=>{
//     console.log(x);
// }).catch((err)=>{
//     console.log(err);
// })

// let pr1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve('success2')
//     },1000);
//     });


    // Promise.all([pr,pr1]).then((res)=>{

    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })

    //    Promise.allSettled([pr,pr1]).then((res)=>{

    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // });

    //      Promise.race([pr,pr1]).then((res)=>{

    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // });

    function test(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('success1');
            },8000);
            });
    }


    function test2(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('4 sec');
            },4000);
            });
    }

    async function result(){
       var result= await test();
       console.log(result);
       var result1= await test2();
       console.log(result1);
       
    }
    result();



