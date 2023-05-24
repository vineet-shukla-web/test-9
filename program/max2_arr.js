var arr = [20,10,40,2,1];
var maxArr=arr[0];
let i;
var secondHigest=[];
for(i=0;i<arr.length;i++){
    if(arr[i]>maxArr){
        maxArr=arr[i]
    }
}
console.log("max array"+maxArr);

