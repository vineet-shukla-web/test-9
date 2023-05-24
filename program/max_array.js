var arr = [1,1,3,2,4,6,5];
//var arrStr = ["vineet","shukla","test"];
var maxArr=arr[0];
let i;
//console.log(arrStr.toString())
for(i=0;i<arr.length;i++){
    if(arr[i]>maxArr){
      maxArr=arr[i];
    }
}
console.log("max array",maxArr)