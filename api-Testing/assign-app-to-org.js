var chai = require('chai');
let {except,assert} = require('chai');
var jp =require('jsonpath');
require('dotenv').config()

let chaiHttp = require('chai-http');
chai.use(chaiHttp);
NODE_TLS_REJECT_UNAUTHORIZED='0'
// set NODE_TLS_REJECT_UNAUTHORIZED=0 for running the cases


describe('Roster Server App Assignment to org', function (done) {
    console.log("","Application assign to org")
    console.log("",{ 'App Name':'About.com' ,'User Name':'orteachernew','Org Source Id':'0421','Org Name':'Maple Park Elementary School'})
    it('PUT /https://betanodeapi.classlink.com/admin/oneroster/applications/1152/orgs/assign',async function()  {
        var res = chai.request(process.env.NODE_API+'/admin/oneroster/applications/1152/orgs/assign')
        .put('')
        .send({
            "id": 57,
            "sourcedId": "0421",
            "status": "active",
            "dateLastModified": "2022-08-18T14:23:48.000Z",
            "name": "Maple Park Elementary School",
            "type": "school",
            "identifier": "120153002678",
            "metadata": "{}",
            "flag": 0,
            "IsAssigned": 0,
            "Action": "<button type=\"button\" class=\"btn btn-primary btn-xs btn-mini assign-app-orgs\">Add</button>",
            "ApplicationName": "About.com",
            "tenantId": "",
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
    it('Verify Application which is assigned to user org',async function()  {
        var res = chai.request(process.env.NODE_API+'/v2/applications')
        .get('')
        .set('Accept','application/json')
        .set('gwstoken', process.env.USER_GWSTOKEN)
        .end((err, res) => {
            if(res.body && res.body.response === undefined) {
                console.error("Please enter valid GWSTOKEN");
            } else {
                var result = res.body.response.find(item => item.name === 'About.com');
            }
            
        });
    });
});
