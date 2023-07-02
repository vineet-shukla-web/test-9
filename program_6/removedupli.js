var arr=[1,2,1,1,10,4,6,4];//remove duplicate

var unique=[];
var unique1=[];

for(i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }else{
        unique1.push(arr[i]);
    }
}
console.log("unique value",unique)
console.log("not unique value",unique1)

var arr1=[10,5,6,9];
var sum=0;
for(i=0;i<arr1.length;i++){
    sum+=arr1[i];
}
console.log("sum="+sum);
var arr2=[20,10,5,4];
console.log(arr2[arr2.length-2]);
console.log(arr2.slice(-1));
