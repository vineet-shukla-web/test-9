let arr = [1, 2, 3, 2, 4, 5, 4, 6];

arr = arr.filter((value, index, array) => {
  return array.indexOf(value) === array.lastIndexOf(value);
});

console.log(arr); // Output: [1, 3, 5, 6]
