var arr=[20,30,40,40,20]
var maxArr=[0];
var i;

for(i=0;i<arr.length;i++){
    if(arr[i]>maxArr){
        maxArr=arr[i];
    }
}
console.log("max array",maxArr)