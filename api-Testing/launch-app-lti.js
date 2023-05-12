var chai = require('chai');
let { except, assert } = require('chai');
var jp = require('jsonpath');
require('dotenv').config()
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
// NODE_TLS_REJECT_UNAUTHORIZED='0'
// set NODE_TLS_REJECT_UNAUTHORIZED=0 for running the cases


describe('Analytics Edge App application launch', function (done) {
    it('GET /https://onerostercache-api-beta.classlink.io/orCache/v2.0/search/tenants/tenant_id/users', async function () {
        var res = chai.request(process.env.ONROSTER_API + '/orCache/v2.0/search/tenants/490/users')
            .get('?username=orteachernew&inflateOrgs=false&inflateClasses=false')
            .set('Accept', 'application/json')
            .set('Authorization', 'bbb14a6a33b44f309ca09a2cc673521c')
            .end((err, res) => {
                var exp_cl_courseSourcedIds = ['5012070Z', '5015070Z', '5020060Z'];
                var exp_orgSourcedIds = ['0421'];
                var ac_orgSourcedIds = res.body.orgSourcedIds;
                var ac_cl_courseSourcedIds = res.body['metadata.cl_courseSourcedIds'];
                if (res.status == 200 && (JSON.stringify(exp_cl_courseSourcedIds) === JSON.stringify(ac_cl_courseSourcedIds)) && JSON.stringify(exp_orgSourcedIds) === JSON.stringify(ac_orgSourcedIds)) {
                    //console.log("App test success");
                }
            });
    });
});

describe('Verify Approster cached data', function (done) {
    it('GET  https://onerostercache-api-beta.classlink.io/orCache/v2.0/cached/tenants/tenant_id/orgs/org_id', async function () {
        var res = chai.request(process.env.ONROSTER_API + '/orCache/v2.0/cached/tenants/490/orgs/0421')
            .get('')
            .set('Accept', 'application/json')
            .set('Authorization', 'bbb14a6a33b44f309ca09a2cc673521c')
            .end((err, res) => {
                var exp_SourcedId = '0421';
                var exp_identifier = '120153002678';
                var ac_SourcedId = res.body.data.sourcedId;
                var ac_identifier = res.body.data.identifier;
                if (res.status == 200 && exp_SourcedId == ac_SourcedId && exp_identifier == ac_identifier) {
                    console.log("verify approster cached success")
                }
            });
    });

});