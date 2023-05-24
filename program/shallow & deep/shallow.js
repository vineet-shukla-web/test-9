var obj={
    name:"vineet",
    address:{
        city:"up"
    }
}

var user=Object.assign({},obj);
user.name="shukla";
user.address.city='hyd'
console.warn(obj);
console.warn(user);