class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        var currentWord='';
        var word=[];
        for(let i=0;i<s.length;i++)
        {
            if(s[i]!== ' '){
                currentWord+=s[i];
            }else{
                word.push(currentWord);
                currentWord='';
            }
        }
        word.push(currentWord);
        return currentWord;
    }
}


obj=new Solution();
var result=obj.reverseWords("hello vineet");
console.log(result);