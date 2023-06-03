var con =require("./db.js");
var async=require('async');

    async.waterfall([
        function(callback){
            var qr="select * from tes23 where name="+"'shukla'";
            //console.log(qr)
            con.query(qr,function(err, result){
          //console.log("===",result)
          return callback(null,result)
        });

        },function(data,callback){
            var qr="select * from tes23 where name="+"'vineet'";
            //console.log(qr)
            con.query(qr,function(err, result){
         // console.log("===",result)
          callback(null,result)
        });

        }




    ],function(err,result){
     console.log("final res",result)
    }
    )