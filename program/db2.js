var mysql=require('mysql');

var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"test"
});

con.connect(function(error){
    if(error){
        return error;
    }

});

module.exports=con;