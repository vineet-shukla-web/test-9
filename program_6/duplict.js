var arr=[10,2,0,2,10,5];
var unique=[];
var duplicate=[];
for(i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }else{
        duplicate.push(arr[i]);
    }
}

console.log(unique);
console.log(duplicate);