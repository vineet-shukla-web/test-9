var str="vineet shukla";
var result=test(str);
console.log(result);
function test(str){
    var currentWord='';
    var word=[];
    for(let i=0;i<str.length;i++){
        if(str[i]!==' '){
        currentWord+=str[i];
    }else{
        word.push(currentWord);
        currentWord="";
    }
}

word.push(currentWord);
// console.log(word);
var reverse=[];
for(let i=word.length-1;i>=0;i--){
    reverse.push(word[i]);
}
console.log(reverse);
var data=reverse.join(' ');
return data;
}