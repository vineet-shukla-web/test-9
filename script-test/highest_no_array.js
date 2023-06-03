let arr= [10,30,40];
let i;
let maxArr=arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i]>maxArr){
        maxArr=arr[i];
    }
}
console.log(maxArr);