// Input string
var inputString = "This is a test string. This string contains duplicate words like test, is, and this.";

// Find duplicate words
var duplicateWords = inputString.match(/\b(\w+)\b/g);

// Create an object to store word frequencies
var wordFrequency = {};

// Iterate over duplicate words and count their occurrences
duplicateWords.forEach(function(word) {
  if (wordFrequency[word]) {
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1;
  }
});

// Print duplicate words and their frequencies
for (var word in wordFrequency) {
  if (wordFrequency[word] > 1) {
    console.log("'" + word + "' appeared " + wordFrequency[word] + " times.");
  }
}
