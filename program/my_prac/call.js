var obj={
    name:"vineet",
    last_name:"shukla",
    fullName:function(){
        return this.name;
    }
}

var obj2={
    name:"hi",
    last_name:"vk"
}

var result=obj.fullName.call(obj2);
console.log(result);