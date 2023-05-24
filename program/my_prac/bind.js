var obj={
    name:"roshn",
    last_name:"shukla",
    fullName:function(){
        return this.name;
    }
    }
    
    var obj1={
        name:"vineet",
        age:24
    }
    
    var result=obj.fullName.bind(obj1);
    console.log(result());