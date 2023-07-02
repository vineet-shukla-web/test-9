const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj); //convert object into json

console.log(myJSON)

var obj=JSON.parse(myJSON); //convert json into object
console.log(obj);


const myObj1={name: "John", age: 31, city: "New York"};
console.log(myObj1);
myObj1.age=40;



myObj1.lastname="shukla";
console.log(myObj1);
delete myObj1.age;
console.log(myObj1);