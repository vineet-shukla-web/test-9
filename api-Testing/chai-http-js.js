var chai = require('chai');
let {except,assert} = require('chai');
var jp =require('jsonpath');
require('dotenv').config()
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
// NODE_TLS_REJECT_UNAUTHORIZED='0'
// set NODE_TLS_REJECT_UNAUTHORIZED=0 for running the cases


describe('App Assign to Roster App', function (done) {
    it('GET /Checking user in enabled for one orster or not',async function()  {
        var res = chai.request(process.env.ORCACHE_API+'/orCache/v2.0/search/tenants/490/users')
        .get('?username=orteachernew&inflateOrgs=false&inflateClasses=false')
        .set('Accept','application/json')
        .set('Authorization', 'bbb14a6a33b44f309ca09a2cc673521c')
        .end((err, res) => {
             console.log("res==============",res.body);
            //return res.body;
            // res.should.have.statusCode(200);
            // res.body['array'].should.all.have.nested.property('orgSourcedIds');
            // done();
        });
    });

    it('POST /assignapp admin/applications/rosterserver/assignapp',async function()  {
        console.log("",{ 'App Name':'About the Sun' ,'User Name':'orteachernew','RosterServerAppId':'57','Org Name':'Maple Park Elementary School'})
        var res = chai.request(process.env.NODE_API+'/admin/applications/rosterserver/assignapp')
        .post('')
        .send({"LPApplicationId": 908, "RosterServerAppId": 57})
        .set('Accept','application/json')
        .set('gwstoken', process.env.TENANT_GWSTOKEN)
        .end((err, res) => {
            // console.log("res======>",res.body);
        });
    });
});


describe('Application assigned to roles', function (done) {
    it('POST /assignapp to roles admin/applications/rosterserver/roles',async function()  {
        var res = chai.request(process.env.NODE_API+'/admin/applications/rosterserver/roles')
        .post('')
        .send({"orApplicationId": 334, "roles": ["teacher"]})
        .set('Accept','application/json')
        .set('gwstoken', process.env.TENANT_GWSTOKEN)
        .end((err, res) => {
            // res.should.have.statusCode(200);
            // res.body['array'].should.all.have.nested.property('orgSourcedIds');
            // done();
        });
    });
});

describe('Application assigned sucessfully', function (done) {
    it('Verify Application which is assigned to user class',async function()  {
        var res = chai.request(process.env.NODE_API+'/v2/applications')
        .get('')
        .set('Accept','application/json')
        .set('gwstoken', process.env.USER_GWSTOKEN)
        .end((err, res) => {
            var result = res.body.response.find(item => item.name === 'About the Sun');
            // res.should.have.statusCode(200);
            // res.body['array'].should.all.have.nested.property('orgSourcedIds');
            // done();
        });
    });
});


