const express = require("express")
//const path = require('path')
const app = express()
   
var PORT = process.env.port || 3000
  
// View Engine Setup
// app.set("views", path.join(__dirname))
// app.set("view engine", "ejs")
  
app.get("/user", function(req, res){
  
    var name = req.query.name
    var age = req.query.age

    res.send(age);
      
    console.log("Name :", name)
    console.log("Age :", age)
})
   
app.listen(PORT, function(error){
    if(error) throw error
    console.log("Server created Successfully on PORT", PORT)
})