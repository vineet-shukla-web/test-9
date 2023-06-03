var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
 
 
var mysql = require('mysql');
var connection  = require('./model/db');
var authRouter = require('./routes/auth');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))
// app.use(session({ cookie: { maxAge: 60000 }, 
//     secret: 'woot',
//     resave: false, 
//     saveUninitialized: false}));

app.use(flash());
app.use(expressValidator());
 
const checkUrl=function(req,res,next){
  console.warn("current route is "+ req.originalUrl);
  if(req.originalUrl=='/readPosts'){
    res.redirect('/auth/readPosts');
  }
  if(req.originalUrl=='/admin'){
    console.log("admin")
    if (req.session.loggedin && req.session.username=='admin') {
      res.redirect('/auth/home');
    }else{
      console.log("login")
      res.redirect('/auth/login');
    }
  }
    next();
}
app.use(checkUrl);
app.use('/auth', authRouter);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3001, function () {
    console.log('Node app is running on port 3001');
});
module.exports = app;