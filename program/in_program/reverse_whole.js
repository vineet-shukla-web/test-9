function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Reverse each word in the array
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a string
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }
  
  // Example usage:
  const str = 'Hello world';
  const reversed = reverseWords(str);
  console.log(reversed); // Output: "olleH dlrow"