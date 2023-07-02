var arr=[10,20,40,60];
var arr1=[];
// arr.forEach((element) => {
//     arr1.unshift(element);
// });
for(i=arr.length-1;i>=0;i--){
    arr1.unshift(arr[i])
}
console.log(arr1.length);
console.log(arr1);