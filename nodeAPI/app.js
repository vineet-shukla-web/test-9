var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var usersRouter = require('./routes/middleware');

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var connection = require('./model/db');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const checkUser = function (req, res, next) {
  console.warn("current route is " + req.originalUrl);
  console.log("resq" + req.body.name);
  if (req.originalUrl == '/users/saveuser') {
    connection.query("select * from user where name=?", [req.body.name], function (error, results, fields) {
      if (error) {
        //throw error
        res.end(error);
      } else {
        console.log('Record edit.')
        console.log('Query result: ', results.length);
        if (results.length >= 1) {
          var results={'status':1};
          console.log('exist')
          res.end(JSON.stringify(results));
        } else {
          next();
        }
      }
    });
  } else {
    next()
  }

}
app.use(checkUser);

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000, function () {
  console.log('Node app is running on port 3000');
});
module.exports = app;
