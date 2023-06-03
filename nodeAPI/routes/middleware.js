var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = require('../model/db');


router.get('/checkuser/:id', function (req, res) {
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