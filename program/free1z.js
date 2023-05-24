// var obj={
//     name:'vineet',
//     address:{
//         city:"noida"
//     }
// }

// Object.freeze(obj);
// obj.address.city="shukla"
// console.log(obj);

var obj={
    name:'vineet',
    address:{
        city:"noida"
    }
}

Object.seal(obj);
obj.name="wow"
obj.address.city="gorakhpur"
obj.ok="yes"

console.log(obj);