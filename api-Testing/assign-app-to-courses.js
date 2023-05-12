var chai = require('chai');
let {except,assert} = require('chai');
var jp =require('jsonpath');
require('dotenv').config()

let chaiHttp = require('chai-http');
chai.use(chaiHttp);
NODE_TLS_REJECT_UNAUTHORIZED='0'
// set NODE_TLS_REJECT_UNAUTHORIZED=0 for running the cases


describe('Roster Server App Assignment to courses', function (done) {
    console.log("","Application assign to courses")
    console.log("",{ 'App Name':'1 Maths(1)(1)', 'App Description': '1 Maths' ,'User Name':'orteachernew','Course Source Id':'5012070Z','Course Title':'MATH GRADE FIVE','Course Code':'5012070Z'})
    it('PUT /admin/oneroster/applications/271724/courses/assign',async function()  {
        var res = chai.request(process.env.NODE_API+'/admin/oneroster/applications/271724/courses/assign')
        .put('')
        .send({
            "id": 736,
            "sourcedId": "5012070Z",
            "status": "active",
            "dateLastModified": "2022-08-18T14:23:48.000Z",
            "title": "MATH GRADE FIVE",
            "courseCode": "5012070Z",
            "grade": "",
            "metadata": "{}",
            "flag": 0,
            "IsAssigned": 0,
            "Action": "<button type=\"button\" class=\"btn btn-primary btn-xs btn-mini assign-app-courses\">Add</button>",
            "checkboxhtml": "<span class=\"checkbox\"><input type=\"checkbox\" id=\"chk-box-row-0\" class=\"chk-box-row\"><label for=\"chk-box-row-0\"></label></span>",
            "ApplicationName": "1 Maths(1)(1)",
            "tenantId": "",
            "isDeleted": ""
          })
        .set('Accept','application/json')
        .set('gwstoken',  process.env.TENANT_GWSTOKEN)
        .end((err, res) => {
            if( res !==undefined && res.body && res.body.status === '1') {
                // console.log("Application assigned sucessfully")
               } else {
                return err;
               }
        });
    });
});

describe('Application assigned sucessfully', function (done) {
    it('Verify Application which is assigned to user course',async function()  {
        var res = chai.request(process.env.NODE_API+'/v2/applications')
        .get('')
        .set('Accept','application/json')
        .set('gwstoken', process.env.USER_GWSTOKEN)
        .end((err, res) => {
            if(res.body && res.body.response === undefined) {
                console.error("Please enter valid GWSTOKEN");
            } else {
                var result = res.body.response.find(item => item.name === '1 Maths(1)(1)');
                console.log(result.name +' ' + 'app is assigned sucessfully')
            }
            
        });
    });
});
