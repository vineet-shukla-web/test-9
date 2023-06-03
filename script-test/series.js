var async=require("async");
async.series([
    function(callback) {
      console.log('one');
      callback(null, 1);
    },
    function(callback) {
        setTimeout(function() {
      console.log('two');
      callback(null, 2);
        },2000);
    },
    function(callback) {
      console.log('three');
      callback(null, 3);
    }
  ],
  function(err, results) {
    console.log(results);
    // results is now equal to [1, 2, 3]
  });