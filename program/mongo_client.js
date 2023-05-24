var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
// var MongoClient = require('mongose');
var url = "mongodb://localhost:27017/microservice";  
MongoClient.connect(url, function(err, db) { 
  console.log(err); 
  if (err) throw err;  
  console.log(db);
  db.collection("user").insertOne({id:1}, function(err, result) {  
    if (err) throw err;  
    console.log(result.name);  
    db.close();  
  });  
}); 