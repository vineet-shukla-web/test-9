let str="vineet ji";
var currentWord="";
var words = [];
// var str1="";

// for(i=str.length-1;i>=0;i--){
//     str1+=str[i];
// }
// console.log(str1);
for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      currentWord += str[i];
      console.log(currentWord);
    } else {
      words.push(currentWord);
      currentWord = '';
    }
  }
  words.push(currentWord);
  console.log(words);

  var reverseWords=[];
  for(j=words.length-1;j>=0;j--){
    reversedWords.push(words[j]);
  }


