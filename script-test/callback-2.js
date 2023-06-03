

function test(cb){

    let data;
    setTimeout(()=>{

        data=10;
        cb(data);
    },200)

}
test((data)=>{
    console.log(data);

})