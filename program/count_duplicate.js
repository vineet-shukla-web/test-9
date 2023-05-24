// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) {
//     console.log(x);
//      counts[x] = (counts[x] || 0) + 1;
//      });
// console.log(counts);
// var a1="10"+20+30;
// console.log(a1);

// var a=20+30+"40";
// console.log(a);

// var a3=20+"30"+40;
// console.log(a3);

//=======assign varibale value======//
// var a=10;
// var b=a;
// b=20;
// console.log(a);
//console.log(b);

// var a=[10,20,30];
// var b=a;
// b[3]=60;
// b.push[90];
// console.log(a);
// console.log(b);

var obj={
   name:"vineet",
   address:{
    city:"noida"
   }
}
Object.freeze(obj)
var b=obj;
obj.name="shukla";
obj.address.city="gurgaon"

console.log(obj);
console.log(b);

