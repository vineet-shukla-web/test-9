let arr = [10, 324, 45, 90, 9808];
let i;
let max = arr[0];
for (i = 1; i < arr.length; i++) {
    if (arr[i] > max)
        max = arr[i];
}
console.log("max",max);


