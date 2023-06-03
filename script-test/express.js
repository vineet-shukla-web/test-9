var db = require('./db');
const express= require("express")
var app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/save',function(req,res){
    //var post  = {name:'vineet', age:28, email:'vineets081@gmail.com'};
    db.query('INSERT INTO tes23 SET ?', req.body, function(err, result) {
      if (err) {
        console.log(err);
        throw err;
      }
      res.send(result);
    });
});
app.listen(3000,(req,res)=>{
    console.log("listen port",3000);
});