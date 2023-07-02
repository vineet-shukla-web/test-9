var fs = require('fs');

fs.readFile('test.txt', 'utf8', function (err, data) {
    console.log(data);
    debugger;

    if (err) throw err;
    
    console.log(data);
});