var arr=[10,0,40,30,2];

//console.log(Math.max(...arr));

var max=arr[0];
var min=arr[0];

for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("Max value",max)
console.log("Min value",min)