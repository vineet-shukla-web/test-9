var arr=[10,1,2,3,0,4];
let i,j;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
        temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
        }
    }
    
}
console.log(arr);