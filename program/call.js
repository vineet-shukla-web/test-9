function test(){
 return this.name;
}

let obj={
    name:"vineet",
    age:24
}

var result=test.call(obj)
console.log(result);