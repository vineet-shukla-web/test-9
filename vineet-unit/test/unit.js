var chai = require('chai');
let { expect, assert } = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
var should = chai.should();
const Cube = require('../unit').Cube;
const add = require('../unit1');
let emp = ['vineet', 'sdjsjdj']
describe("Test All Api", function () {
    // it('GET /Checking user response', function (done) {
    //     var res = chai.request('http://localhost:8090/getData')
    //         .get('?data=1')
    //         .end((err, res) => {
    //             expect(res.body.data).to.equal(2);
    //             done();
    //         });
    // });
    // it('GET /Checking1 user response', function (done) {
    //     var res = chai.request('http://localhost:8090/getData')
    //         .get('?data=1')
    //         .end((err, res) => {
    //             expect(res.body.data).to.equal(2);
    //             done();
    //         });
    // });
    it('1. The side length of the Cube', function (done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });

    it('function test', function (done) {
        expect(add()).to.equal(4);
        done();
    });

    it('====Assert===', function (done) {
        assert.equal(emp.length, 2);
        done()
    });

    it('====Should===', function (done) {
        emp[0].should.equal('vineet')
        done()
    });
})

//npx mocha ./unit.js     run command
//npm run test-report --  For genrate report Graphically
/*======Run command to genrate Report===========================*/
// ===mocha test --reporter mochawesome --require mochawesome/register