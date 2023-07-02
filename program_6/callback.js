// function test(cb){
//     setTimeout(()=>{
//         cb('hello');
//     });
// }
// test((cb)=>{
//     console.log(cb);
// });

// pr=new Promise((resolve,reject)=>{

//     //resolve('hi');
//     reject('test');
// });

// pr.then((x)=>{
//     console.log(x);
// }).catch((err)=>{
// console.log(err);
// });

var test1=(x)=>{
    return new Promise((resolve,reject)=>{
         resolve(x*x);
    })
}

async function test(){
    var result=await test1(2);
    console.log(result);
}
test();


