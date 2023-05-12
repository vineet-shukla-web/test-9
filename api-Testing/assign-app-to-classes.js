var chai = require('chai');
let {except,assert} = require('chai');
var jp =require('jsonpath');

require('dotenv').config()

let chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('Roster Server App Assignment to classes', function (done) {
    console.log("","Application assign to classess")
    console.log("",{ 'App Name':'__DANAPP(1)', 'App Description': 'Dan Garrett Security Testing' ,'User Name':'orteachernew','Class Source Id':'0421_5012070Z_502_222297','Class Title':'MATH GRADE FIVE'})
    it('PUT https://betanodeapi.classlink.com/admin/oneroster/applications/271787/classes/assign',async function()  {
        var res = chai.request(process.env.NODE_API+'/admin/oneroster/applications/271787/classes/assign')
        .put('')
        .send({
            "id": 1255948,
            "sourcedId": "0421_5012070Z_502_222297",
            "status": "active",
            "dateLastModified": "2022-08-18T14:23:49.000Z",
            "title": "MATH GRADE FIVE",
            "classCode": "",
            "classType": "scheduled",
            "location": "02-015",
            "grade": "",
            "subjects": "[\"Elementary Grade 05\"]",
            "course": "{\"href\":\"https://tms-dv-v2.oneroster.com/ims/oneroster/v1p1/courses/5012070Z\",\"sourcedId\":\"5012070Z\",\"type\":\"course\"}",
            "school": "{\"href\":\"https://tms-dv-v2.oneroster.com/ims/oneroster/v1p1/orgs/0421\",\"sourcedId\":\"0421\",\"type\":\"org\"}",
            "terms": "[{\"href\":\"https://tms-dv-v2.oneroster.com/ims/oneroster/v1p1/academicSessions/FY_1617\",\"sourcedId\":\"FY_1617\",\"type\":\"academicSession\"}]",
            "color": "#607D8B",
            "flag": 0,
            "IsAssigned": 0,
            "Action": "<button type=\"button\" class=\"btn btn-primary btn-xs btn-mini assign-app-classes\">Add</button>",
            "ApplicationName": "__DANAPP(1)",
            "tenantId": "490",
            "isDeleted": ""
          })
        .set('Accept','application/json')
        .set('gwstoken', process.env.TENANT_GWSTOKEN)
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
    it('Verify Application which is assigned to user class',async function()  {
        var res = chai.request(process.env.NODE_API +'/v2/applications')
        .get('')
        .set('Accept','application/json')
        .set('gwstoken', process.env.USER_GWSTOKEN)
        .end((err, res) => {
            if(res.body && res.body.response === undefined) {
                console.error("Please enter valid GWSTOKEN");
            } else {
                var result = res.body.response.find(item => item.name === '__DANAPP(1)');
                console.log(result.name +' ' + 'app is assigned sucessfully')
            }
            
        });
    });
});

