var arr=[1,4,2,3,1,6,7,9];
var i,j;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log("sort array=>",arr);