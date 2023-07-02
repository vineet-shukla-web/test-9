var arr=[10,20,0,10,0,2,4,2];
const count={};
arr.forEach(function(x) {
    count[x]=(count[x]||0)+1;
});
console.log(count);