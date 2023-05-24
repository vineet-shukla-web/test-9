let arr=[6,5,6,5,4];
let i;
let unique=[];
for (i=0;i<arr.length;i++){
     if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
     }
}
console.log(unique);