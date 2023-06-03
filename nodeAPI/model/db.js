var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'user_db'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
//  connection.end(function(err) {
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection.');
// });
module.exports = connection;