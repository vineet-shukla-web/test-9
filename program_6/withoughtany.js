function reverseWords(sentence) {
    // Split the sentence into an array of words
    var words = [];
    var currentWord = '';
  
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ') {
        currentWord += sentence[i];
      } else {
        words.push(currentWord);
        currentWord = '';
      }
    }
  
    // Add the last word to the array
    words.push(currentWord);
  
    // Reverse the array of words
    var reversedWords = [];
    for (var j = words.length - 1; j >= 0; j--) {
      reversedWords.push(words[j]);
    }
  
    // Join the reversed words into a new sentence
    var reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage:
  var input = 'Hello world';
  var reversed = reverseWords(input);
  console.log(reversed); // Output: "world Hello"
  