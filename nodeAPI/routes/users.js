var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = require('../model/db');
/* GET users listing. */
router.get('/testing', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/testing', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/fetchAll',(req, res) => {
  connection.query('select * from user', function (error, results, fields) {
      console.log('Fetch record');
     if (error) throw error;//throw eror
     res.end(JSON.stringify(results));
     //connection.release();
   });
   //connection.destroy();
})

router.get('/usersingle/:id', function (req, res) {
  console.log("resq"+req.params.id);
   connection.query('select * from user where user_id=?', [req.params.id], function (error, results, fields) {
    if (error) {
      //throw error
      res.end(error);
    }else{
      console.log('Record edit.')
      res.end(JSON.stringify(results));
    }
    });
})

// update record 
router.put('/updateusers', function (req, res) {
  connection.query('UPDATE `user` SET `name`=?,`email`=?,`phone`=?,`address`=?,`password`=? where `user_id`=?', [req.body.name,req.body.email, req.body.phone, req.body.address, req.body.password,req.body.user_id], function (error, results, fields) {
   if (error) throw error;
    res.end(JSON.stringify(results));
   console.log('Record update');
   //res.end('Record has been updated successfully!');
   });
});
// create a new record 
router.post('/saveuser', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO user SET ?', postData, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   console.log('Record saved');
   //res.end('Record has been saved successfully!');
   });
});

router.delete('/deleteuser', function (req, res) {
  console.log("del-id"+req.body.id);
   connection.query('DELETE FROM `user` WHERE `user_id`=?', [req.body.id], function (error, results, fields) {
      if (error) throw error;
    console.log('Record deleted');
    res.end(JSON.stringify(results));
      //res.end('Record has been deleted successfully!');
    });
});

module.exports = router;
