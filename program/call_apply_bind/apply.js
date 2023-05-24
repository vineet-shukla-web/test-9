var obj={
    name:"vineet",
    age:20,
    address:function (city,country){
       return this.name + city+"hhh"+country;
    }
}

var obj1={
   name:"shukla",
   age:40
}

var result=obj.address.apply(obj1,["gzb","india"])
console.log(result);