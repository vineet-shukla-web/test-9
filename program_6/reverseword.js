function reverseWords(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");
    console.log(words);
  
    // Reverse the order of the words
    var reversedWords = words.reverse();
    console.log(reversedWords);
  
    // Join the reversed words into a sentence
    var reversedSentence = reversedWords.join(" ");
  
    return reversedSentence;
  }
  
  // Example usage
  var sentence = "India is my country";
  var reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);
  