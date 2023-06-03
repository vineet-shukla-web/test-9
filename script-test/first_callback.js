// const fs = require("fs"); 
// // The following file does not exists
// const file = "file.txt";
// // This should throw an error
// // using the Error-first callback
// const ErrorFirstCallback = (err, data) => {
// if (err) {
//     return console.log("Error: " + err);
// }
// console.log("Function successfully executed");
// };
// // Executing the function
// fs.readFile(file, ErrorFirstCallback);

const fs = require("fs");
  
// This file exists in the system
const file = "file.txt";
  
// Calling the function to read file
// with error callback and data
const ErrorFirstCallback = (err, data) => {
if (err) {
    return console.log(err);
}
console.log("Function successfully executed");
console.log("File Content : " + data.toString());
};
  
// Executing the function
fs.readFile(file, ErrorFirstCallback);