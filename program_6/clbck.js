function add(cb){
    setTimeout(()=>{
     cb('hello');
    },1000)
}

add((result)=>{
    console.log(result);
})