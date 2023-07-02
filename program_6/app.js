var express=require('express');
var mysql=require('mysql');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
var path = require('path');
const jwt = require('jsonwebtoken');
const rateLimit = require("express-rate-limit");
const logger = require('morgan');

const multer  = require('multer')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname+'/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});

app.use(
rateLimit({
      windowMs: 1 * 60 * 1000, // 12 hour duration in milliseconds
      max: 5,
      message: "You exceeded 100 requests in 1 min limit!",
      headers: true,
    })
  );
  app.use(logger('dev'));

var upload = multer({storage: storage});
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test3"
});

con.connect((err)=>{
    if(err)throw err;
});

const requestTime = function (req, res, next) {
    
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime);

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
 });
  app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })


app.get('/test_user',(req,res)=>{
    con.query("select * from user",(err,result)=>{
        if(err)throw err;
        res.send(result);
    });
});

app.post('/insert_user',(req,res)=>{
    console.log(req.body);
    var userName=req.body.name;
    var query=`insert into user (name) values('${userName}')`;
    con.query(query,(err,result)=>{
        if(err)throw err;
        res.send(result);
    });
});

app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.send("success")
});

app.post("/insert_emp",(req,res)=>{
    console.log(req.body);
    var userName=req.body.name;
    var id=req.body.id;
    var query=`insert into emp (id,name) values(${id},'${userName}')`;
    con.query(query,(err,result)=>{
        if(err)throw err;
        res.send(result);
    });
})

app.post("/sign_up",(req,res)=>{
    console.log(req.body);
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var query=`insert into student (name,email,password) values('${name}','${email}','${password}')`;
    con.query(query,(err,result)=>{
        if(err)throw err;
        res.send(result);
    });
})

app.post("/user/generateToken", (req, res) => {
	let jwtSecretKey = "hfdhfhdhfhfhfhf";
	let data = {
		time: Date(),
		userId: 12,
	}
	const token = jwt.sign(data, jwtSecretKey);
	res.send(token);
});

// Verification of JWT
app.get("/user/validateToken", (req, res) => {
	// Tokens are generally passed in header of request
	// Due to security reasons.
	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
	let jwtSecretKey = "hfdhfhdhfhfhfhf";

	try {
		const token = req.headers['authorization'];
		const verified = jwt.verify(token, jwtSecretKey);
        
		if(verified){
			return res.send("Successfully Verified");
		}else{
			// Access Denied
			return res.status(401).send(error);
		}
	} catch (error) {
		// Access Denied
		return res.status(401).send(error);
	}
});

app.listen(8090,()=>{
    console.log("server is running on port",8090)
});