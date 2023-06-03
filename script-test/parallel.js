var async=require('async');
async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    console.log("hhhh",results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });