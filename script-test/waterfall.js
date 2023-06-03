var async=require("async");
async.waterfall([
    function(callback) {
      callback(null, 'Task 1', 'Task 2');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
      setTimeout(function(){
      let arg3 = arg1 + ' and ' + arg2;
      callback(null, arg3);
      },2000);
    },
    function(arg1, callback) {
      // arg1 now equals 'Task1 and Task2'
      arg1 += ' completed';
      callback(null, arg1);
    }
  ], function(err, result) {
    // result now equals to 'Task1 and Task2 completed'
    console.log(result);
  });