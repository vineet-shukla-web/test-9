let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
console.log(clonedObj);
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };