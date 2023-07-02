var arr=[10,2,11,0,6,1,4];
var i,j;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]<arr[j+1]){
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);