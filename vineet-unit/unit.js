var chai = require('chai');
let {expect,assert} = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe("Test All Api",function(done){
    it('GET /Checking user response',async function()  {
        var res = await chai.request('http://localhost:8090/getData')
        .get('?data=1');
        expect(res.body.data).to.equal(2);
        //done();
        //  .end((err, res) => {
        //     console.log(res.body)
            
        // });
    });
})

//npx mocha ./unit.js run command