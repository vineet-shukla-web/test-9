
function test(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
         reslove(10);
        },200)
    })
}

async function add(){
   var result= await test();
   console.log(result);
}
add();