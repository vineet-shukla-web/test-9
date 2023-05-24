// var arr=["vineet","hello","test"];
// var result=arr.join(",");
// console.log(result);

const string = "The quick brown fox jumped over the wall. The lazy dog slept behind the wall.";

// Match a word after "wall"
const match = /wall\s(\w+)/g.exec(string);
console.log(match);

if (match) {
  console.log(match[1]); // Output: "The"
} else {
  console.log("No match found.");
}

//convert string to arry
// var str="hello vineet roshan";
// var result=str.split(" ");
// console.log(result);
// console.log(Array.isArray(str))
