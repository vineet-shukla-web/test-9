var test=(cb)=>{
    setTimeout(()=>{
    cb("hello");
    },100)
}

test((result)=>{
    console.log(result)
});