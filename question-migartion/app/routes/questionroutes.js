//'use strict';

var os = require("os");


module.exports = function (app) {
    
    var qnsList = require('../controller/questionController');
    //var updatations = require("../model/updations")//not in use for now

    //Question Master Structure
    app.route('/questionmaster/:questiontype/:start?/:limit?').get(qnsList.allQuestionMasterList);

    //Question Mapping Structure
    app.route('/questionmapping/:questiontype/:start?/:limit?').get(qnsList.allQuestionMappingData);

    
    app.get("/test", (req, res) => {
        //res.json({message: "Hello Test"});
        // console.log(updatations.todayDate())
        // console.log(updatations.todayDate30Secondsago())
    })

};
