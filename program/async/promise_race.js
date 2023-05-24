var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, 'one'); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, 'two'); 
});

Promise.any([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // Both resolve, but p2 is faster
 })
.catch((err)=>{
//     console.log(err);
})