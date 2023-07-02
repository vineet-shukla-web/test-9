var mysql=require('mysql');
var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"news_nation"
});
con.connect(function(error){
    if(error){
        console.log("hdshhdsfdsfdf")
        return error;
    }
});
module.exports=con;