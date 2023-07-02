var arr=[20,10,2,4,8,10];

console.log(arr.sort());
const obj={};
arr.forEach(function(x){
  console.log(x)
  obj[x]=(obj[x]||0)+1;
});

console.log(obj);