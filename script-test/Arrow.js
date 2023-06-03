

//const test=(a,b)=>10;
const test = (a, b) => {
    console.log(arguments);
}

var result = test(30, 60);
//console.log(result)

console.log("=========Normal function=============");
function ok(a, b) {
    console.log(arguments);
}

var result1 = ok(10, 20);
//console.log(result1);

const test9 = () => 10 + 30;
function test10() {
    let result = 10 + 30;
}

//console.log(test9());
//console.log(test10());
var obj =
{
    a: "vineet", b: "testing"
}
console.log(Array.isArray(obj))
