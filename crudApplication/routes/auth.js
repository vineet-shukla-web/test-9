var express = require('express');
var router = express.Router();
var connection  = require('../model/db');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

console.log("vineet"+router);
// function encrypt(text) {
//     let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
//  }
// //display login page
// // router.get('/', function(req, res, next){  
// // // render to views/user/add.ejs
// // res.render('auth/login', {
// // title: 'Login',
// // email: '',
// // password: ''     
// // })
// // })
// //display login page
// // router.get('/login', function(req, res, next){    
// // // render to views/user/add.ejs
// // res.render('auth/login', {
// // title: 'Login',
// // email: '',
// // password: ''    
// // })
// // })
// //authenticate user
// // router.post('/authentication', function(req, res, next) {
// // var name = req.body.name;
// // var password = req.body.password;
// // console.log('name'+name);
// // connection.query('SELECT * FROM user WHERE name = ? AND password = ?', [name, password], function(err, rows, fields) {
// // if(err) throw err
// // // if user not found
// // console.log(rows);
// // if (rows.length <= 0) {
// // req.flash('error', 'Please enter correct user and Password!')
// // res.redirect('/auth/login')
// // }

// // else { // if user found
// // // render to views/user/edit.ejs template file
// // req.session.loggedin = true;
// // req.session.username = name;
// // res.redirect('/auth/index');
// // }            
// // })
// // })
// //display login page
// // router.get('/register', function(req, res, next){    
// // // render to views/user/add.ejs
// // res.render('auth/register', {
// // title: 'Registration Page',
// // name: '',
// // email: '',
// // password: ''    
// // })
// // })
// // user registration
// router.post('/post-register', function(req, res, next){ 
//     console.log('test');
       
// req.assert('name', 'Name is required').notEmpty()           //Validate name
// req.assert('password', 'Password is required').notEmpty()   //Validate password
// req.assert('email', 'Email is required').isEmail()  //Validate email
// req.assert('address', 'Address is required').notEmpty()   //Validate email
// req.assert('phone', 'Phone is required').notEmpty()   //Validate email
// var errors = req.validationErrors()
// if( !errors ) {   //No errors were found.  Passed Validation!
// //var password=encrypt(req.sanitize('password').escape().trim());
// var user = {
// name: req.sanitize('name').escape().trim(),
// email: req.sanitize('email').escape().trim(),
// password: req.sanitize('password').escape().trim(),
// address: req.sanitize('address').escape().trim(),
// phone: req.sanitize('phone').escape().trim()
// }
// connection.query('INSERT INTO user SET ?', user, function(err, result) {
// //if(err) throw err
// if (err) {
// req.flash('error', err)
// // render to views/user/add.ejs
// res.render('auth/register', {
// title: 'Registration Page',
// name: '',
// password: '',
// email: ''                   
// })
// } else {                
// req.flash('success', 'You have successfully signup!');
// res.redirect('/auth/login');
// }
// })
// }
// else {   //Display errors to user
// var error_msg = ''
// errors.forEach(function(error) {
// error_msg += error.msg + '<br>'
// })                
// req.flash('error', error_msg)        
// /**
// * Using req.body.name 
// * because req.param('name') is deprecated
// */
// res.render('auth/register', { 
// title: 'Registration Page',
// name: req.body.name,
// email: req.body.email,
// password: ''
// })
// }
// })
// //display home page
// router.get('/home', function(req, res, next) {
//     console.log("session "+req.session.name);
// if (req.session.loggedin) {
// res.render('auth/home', {
// title:"Dashboard",
// name: req.session.username,     
// });
// } else {
// req.flash('success', 'Please login first!');
// res.redirect('/auth/login');
// }
// });

// // router.get('/index', function(req, res) {
    
// //     if (req.session.loggedin) {
// //         console.log("session name "+req.session.username);
// //         connection.query('select * from user', function (error, results, fields) {
// //            if (error) throw error;
// //            //res.end(JSON.stringify(results));
// //            res.render('auth/home', {
// //             title:"Dashboard",
// //             name: req.session.username,   
// //             });

// //          });
       
// //         } else {
// //         req.flash('success', 'Please login first!');
// //         res.redirect('/auth/login');
// //         }
// //     });
// //     router.get('/user-list', function(req, res) {
// //     console.log("=================="+req.session.username)
// //     if (req.session.loggedin) {
// //         connection.query('select * from user', function (error, results, fields) {
// //         console.log("session name "+req.session.username);
// //         console.log(results);
// //            if (error) throw error;
// //            //res.end(JSON.stringify(results));
// //            res.render('auth/user-list', {
// //             title:"Dashboard",
// //             name: req.session.username,  
// //             userData:results   
// //             });

// //          });
       
// //         } else {
// //         req.flash('success', 'Please login first!');
// //         res.redirect('/auth/login');
// //         }
// //     });
// // Logout user
// router.get('/logout', function (req, res) {
// console.log(req.session);
// req.flash('success', 'Login Again Here');
// req.session.destroy(function(err){
//     if(err){
//        console.log(err);
//     }else{
//        // console.log(session.name);
//        // req.end();
//         //req.flash('success', 'Login Again Here');
//         res.redirect('/auth/login');
//     }
//  }); 
// });
// //===========posts get request==============//
// router.get('/posts',function(req,res,next){ 
//    if (req.session.loggedin) {
//     connection.query('select * from posts', function (error, results, fields) {
//        console.log('===============')
//        console.log(results);
//        res.render('auth/posts', {
//         title:"Dashboard",
//         name: req.session.username,  
//         userData:results 
//         });
//     });
//    }else{
//     res.redirect('/auth/login');
//    }
// });

// //====posts post request=======//
// router.post('/posts',function(req,res,next){ 
//     var postData  = req.body;
//     console.log("========"+postData);
//     connection.query('INSERT INTO posts SET ?', postData, function (error, results, fields) {
//        if (error) throw error;
//        //res.end(JSON.stringify(results));
//      console.log('Record saved');
//      res.end('Record has been saved successfully!');
//      });
    
//  });
//  router.get('/getPosts', function (req, res) {
//     connection.query('select * from posts', function (error, results, fields) {
//         console.log('Fetch record');
//        if (error) throw error;
//        res.end(JSON.stringify(results));
//      });
//  });
//  router.get('/singlePosts/:id', function (req, res) {
//      console.log("========");
//     connection.query('select * from posts where `id`=?', [req.params.id], function (error, results, fields) {
//         console.log('Fetch record');
//        if (error) throw error;
//        console.log(results);
//        res.end(JSON.stringify(results));
//      });
//  });

//  router.delete('/posts', function (req, res) {
//     console.log("del-id"+req.body.id);
//      connection.query('DELETE FROM `posts` WHERE `id`=?', [req.body.id], function (error, results, fields) {
//         if (error) throw error;
//       console.log('Record deleted');
//         res.end('Record has been deleted successfully!');
//       });
//   });
//   router.put('/posts', function (req, res) {
//     connection.query('UPDATE `posts` SET `name`=? where `id`=?', [req.body.name,req.body.id], function (error, results, fields) {
//      if (error) throw error;
//        // res.end(JSON.stringify(results));
//      console.log('Record update');
//      res.end('Record has been updated successfully!');
//      });
//  });

//  router.get('/readPosts', function (req, res) {
//    console.log("=========="+req);
//    connection.query('select * from posts', function (error, results, fields) {
//     console.log('===============')
//     console.log(results);
//     res.render('auth/readPosts', {
//      title:"Dashboard",
//     // name: req.session.username,  
//      userData:results 
//      });
//  });
// });
router.get('/users', function (req, res,next) {
  console.log('Fetch record');
    connection.query('select * from user', function (error, results, fields) {
        console.log('Fetch record');
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
//  router.delete('/users', function (req, res) {
//     console.log("del-id"+req.body.id);
//      connection.query('DELETE FROM `user` WHERE `user_id`=?', [req.body.id], function (error, results, fields) {
//         if (error) throw error;
//       console.log('Record deleted');
//         res.end('Record has been deleted successfully!');
//       });
//   });

//   // get a single user data
// router.get('/usersingle/:id', function (req, res) {
//     console.log("resq"+req.params.id);
//      connection.query('select * from user where user_id=?', [req.params.id], function (error, results, fields) {
//       if (error) throw error;
//       console.log('Record edit.')
//         res.end(JSON.stringify(results));
//       });
//   });
// // update record 
// router.put('/users', function (req, res) {
//     connection.query('UPDATE `user` SET `name`=?,`email`=?,`phone`=?,`address`=?,`password`=? where `user_id`=?', [req.body.name,req.body.email, req.body.phone, req.body.address, req.body.password,req.body.user_id], function (error, results, fields) {
//      if (error) throw error;
//        // res.end(JSON.stringify(results));
//      console.log('Record update');
//      res.end('Record has been updated successfully!');
//      });
//  });
//  // create a new record 
// router.post('/users', function (req, res) {
//     var postData  = req.body;
//     connection.query('INSERT INTO user SET ?', postData, function (error, results, fields) {
//        if (error) throw error;
//        //res.end(JSON.stringify(results));
//      console.log('Record saved');
//      res.end('Record has been saved successfully!');
//      });
//  });
module.exports = router;