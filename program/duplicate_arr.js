var arr = [1,1,3,2,4,6,5];
var unique=[];
arr.forEach(element=>{
 if (!unique.includes(element)) {
    unique.push(element);
}
})
console.log(unique.sort());

//================using loop=========//
for(i=0; i < arr.length; i++){  
    if(unique.indexOf(arr[i]) === -1) {  
        unique.push(arr[i]);  
    }  
}
console.log("unique array",unique)