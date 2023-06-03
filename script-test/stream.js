var fs= require('fs');
var path=require('path');

console.log("============process",process)
const dirPath=path.join(__dirname,'Crud');
console.log("path===",dirPath);
const filePath=`${dirPath}/apple.txt`;
fs.writeFileSync(filePath,"hhdhhdsfhdhsfdh");
