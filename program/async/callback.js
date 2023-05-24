function test(cb){
    setTimeout(()=>{
        cb(20);
    },1000);
}

test((result)=>{
    console.log(result);
});