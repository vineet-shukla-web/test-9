let obj1={
    name:"vineet",
    age:28,
    city:"ghaziabad",
    fullName:function(){
        return this.name+" "+this.age;
    }
}

let obj2={
    name:"Roshan",
    age:30
}

var result=obj1.fullName.bind(obj2);
var output=result();
console.log(output);