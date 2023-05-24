var obj={
    name:"vineet",
    age:20,
    address:function (){
       return this.name;
    }
}

var obj1={
   name:"shukla",
   age:40
}

var result=obj.address.call(obj1)
console.log(result);