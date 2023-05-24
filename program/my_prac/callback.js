function test(cb){
    setTimeout(()=>{
     cb('test');
    },2000)
}

function add(){
    test((cb)=>{
        console.log(cb);
     });
    

}
add();