
 var test=(a)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(a*a)
        },1000);
    });
}

async function result(){
    var result=await test(2);
    console.log(result);
}

result();
