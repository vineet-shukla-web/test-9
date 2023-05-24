let arr=['b','b','a','c'];
let counts={};
arr.forEach((x)=>{
    counts[x]=(counts[x]|0)+1;
})
console.log(counts)