// var obj={
//     name:"vineet"
// }

// var user=obj;
// user.name="shukla";
// console.warn(obj);
// console.warn(user);

//=======shallow copy======//
var obj={
    name:"vineet"
}

var user=Object.assign({},obj);
user.name="shukla";
console.warn(obj);
console.warn(user);