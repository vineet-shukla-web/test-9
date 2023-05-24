var obj={
    name:"vineet",
    age:28,
    address:{
        city:"hhhhh"
    }

}
var b=Object.assign({},obj);
//var b=JSON.parse(JSON.stringify(obj))
var b=obj;
b.name="roshan";
b.address.city="gzb"
console.log(obj)
console.log(b)