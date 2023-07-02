// Input string
var inputString = "Hello, I am ChatGPT, a language model.";

// Pattern to match
var matchString = "am ";

// Find the index of the match
var matchIndex = inputString.indexOf(matchString);

console.log(matchIndex + matchString.length);

// Check if the match exists
if (matchIndex !== -1) {
  // Extract the substring after the match
  var result = inputString.substring(matchIndex + matchString.length);
  
  // Print the result
  console.log(result);
} else {
  console.log("Match not found.");
}
