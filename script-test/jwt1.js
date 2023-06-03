const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
var port = 3010;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/user/create_token', (req, res) => {
    var key = "123344556";
    var data = {
        user: "vineet",
        id: 10,
    }
    var token = jwt.sign(data, key, {
        expiresIn: '1m' // expires in 365 days
    });
    res.send(token);
});
app.post('/user/verify_token', (req, res) => {
    //console.log(req.body.token);
    var key = "123344556";
    jwt.verify(req.body.token, key, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
app.listen(port, () => {
    console.log(`listen ${port}`);
})
