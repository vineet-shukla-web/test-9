var arr=[10,20,10,20];
var unique=[];
for(i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }
}
console.log(unique);