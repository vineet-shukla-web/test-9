var obj={
name:"roshn",
last_name:"shukla",
fullName:function(city,age){
    return this.name+" "+city+" "+age;
}
}

var obj1={
    name:"vineet",
    age:24
}

var result=obj.fullName.apply(obj1,["gzb",24]);
console.log(result);
