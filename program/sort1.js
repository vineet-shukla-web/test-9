var arr = [1, 0, 2, 3, 4, 0];
for (let j = 0; j < arr.length; j++) {
    for (i = 0; i < arr.length - 1; i++) {
        //console.log(arr[i],arr[i+1])
        if (arr[i] > arr[i + 1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);