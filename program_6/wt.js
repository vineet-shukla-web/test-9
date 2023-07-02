var str = "hello vineet";
var result = reverseWord(str);
console.log(result);
function reverseWord(str) {
    var words = [];
    var currentWord = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            currentWord += str[i];
        } else {
            words.push(currentWord);
            currentWord = '';
        }
    }
    words.push(currentWord);
    var reverseWord = [];
    for (let j = words.length - 1; j >= 0; j--) {
        reverseWord.push(words[j]);
    }
    var s = reverseWord.join(' ');
    return s;

}