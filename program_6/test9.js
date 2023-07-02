var str="vineet shukla";
var currentWords="";
var words=[];

for(i=0;i<str.length;i++){
    if(str[i]!==" "){
    currentWords+=str[i];
    }else{
     words.push(currentWords);
     currentWords="";
    }
}
words.push(currentWords);
var reveresd=[];
for(j=words.length-1;j>=0;j--){
   reveresd.push(words[j]);
}
console.log(reveresd);
var result=reveresd.join(" ");
console.log(result);
