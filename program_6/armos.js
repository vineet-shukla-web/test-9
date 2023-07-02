// // program to check an Armstrong number of three digits
// var prompt = require("prompt");
// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

var prompt = require('prompt');

// Function call
prompt.start();

var a;
// Reading two properties from user ie. name & class
prompt.get(['Name', 'class'], function (err, result) {
	
// Printing the result
console.log('Command-line input received:');
console.log('Name: ' + result.Name);
console.log('class: ' + result.class);
a=result.name;
})
console.log("name",a);