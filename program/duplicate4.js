var arr=[10,20,30,20,10];
var unique=[];
var i;
for(i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }
}
console.log("duplicate",unique);