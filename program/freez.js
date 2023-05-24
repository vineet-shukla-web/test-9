var obj={
    a:20
}
Object.freeze(obj);
obj.a=30;
console.log("test",obj.a);