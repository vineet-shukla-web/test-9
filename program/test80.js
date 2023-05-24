var obj={name:"vineet",last_name:"shukla",address:{
    city:"Noida"
}};

//Object.freeze(obj);
Object.seal(obj);
obj.last_name="nothing";
obj.address.city="gzb";
console.log(obj);