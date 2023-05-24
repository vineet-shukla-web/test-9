var arr=[10,20,5,7,5,10];
let i,j;
var unique=[];

for(i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }
}
console.log(unique)