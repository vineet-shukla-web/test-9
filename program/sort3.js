let arr = [10, 0, 2, 0, 6, 7];
let i;
let j;
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("sort array:", arr)