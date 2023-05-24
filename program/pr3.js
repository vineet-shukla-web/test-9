async function display()
{ pr=new Promise((resolve,reject)=>{ resolve("hello"); });   return await pr;
} 
var result=display(); 
result.then((x)=>{ console.log(x)
});