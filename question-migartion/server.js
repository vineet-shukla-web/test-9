const express = require('express'),
        bodyParser = require("body-parser");
const cors = require('cors');


app = express(),
        app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to application"});
});

//require('./app/routes/questionroutes')(app); //importing route

const PORT = process.env.PORT || 8011;


const app__ = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


app__.setTimeout(60 * 1000 * 1440 * 30);  //1440 minutues //now 30 days