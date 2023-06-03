

async function myDisplay() {

   var pr= new Promise((resolve,reject)=>{
    resolve("fix");

   });
   return await pr;
};
var result=myDisplay();
result.then((x)=>{

    console.log(x);
})