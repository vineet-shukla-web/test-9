var str="hello vineet shukla";
var result=reverseWords(str);
function reverseWords(str)
{
    var currentWord='';
    var words=[];
    for(i=0;i<str.length;i++){
        if(str[i]!==' '){
            currentWord+=str[i];
        }else{
            words.push(currentWord);
            currentWord='';
        }
    }
    words.push(currentWord);
    //console.log(words);
    var reverse=[]
    for(i=words.length-1;i>=0;i--){
        reverse.push(words[i]);
    }
    var result=reverse.join(' ');
    console.log(result);
}