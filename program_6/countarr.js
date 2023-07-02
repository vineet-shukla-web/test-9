var arr=["a","b","a","d","b"];
var counts={};
arr.forEach(function (x) {
    //console.log(x)
    counts[x]=(counts[x]||0)+1;

});

console.log(counts);