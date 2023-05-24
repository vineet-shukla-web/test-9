var arr=[20,30,40,40,20]
var unique=[];
var i;
for(i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }
}
console.log("Remove duplicte arr",unique);