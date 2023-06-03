var pg = require('pg');
var conString = "postgres://dev_syll_psql:Psql4!DevSy1lFrm1800Ffi@13.235.135.147:5432/dev-syllabus";

var client = new pg.Client(conString);
client.connect();

//var query = client.query("SELECT * FROM tag_master");
//fired after last row is emitted
//client.query("SELECT * FROM tag_master WHERE name='tag_status'", (err, res) => {
//  console.log(err, res);
//  client.end();
//});




//var sql = require('./pgdb.js');
//
var tagModel = function (question) {};

tagModel.getTagMasterData = async function (tagName, tagValue) {

    try {
        //const query = `SELECT tv.tag_value_id,tv.tag_value, tm.tag_id, tm.tag_name FROM tag_values tv LEFT JOIN tag_master tm ON tm.tag_id=tv.tag_id WHERE tv.tag_value='${tagValue}' AND tm.tag_name='${tagName}'`;
        const query = `SELECT tv.tag_value_id,tv.tag_value, tm.tag_id, tm.tag_name FROM tag_values tv LEFT JOIN tag_master tm ON tm.tag_id=tv.tag_id WHERE tm.tag_name='${tagName}'`;
        // query = `SELECT tv.tag_value_id,tv.tag_value, tm.tag_id, tm.tag_name FROM tag_values tv LEFT JOIN tag_master tm ON tm.tag_id=tv.tag_id ORDER BY tv.tag_value_id DESC LIMIT 2`;

        //const query="SELECT tv.tag_value_id, tm.tag_id FROM tag_values tv LEFT JOIN tag_master tm ON tm.tag_id=tv.tag_id where tv.tag_value='"+tagValue+"' and tm.tag_name='"+tagName+"'";
        const res = await client.query(query);
        console.log(query);
        return res.rows;

    } catch (e) {
        throw new Error(e)
    }

//    catch (err) {
//        console.log(err.stack);
//    } finally {
//        await client.end();
//        await client.close();
//    }

    await client.close();


//    client.query("SELECT * FROM tag_master", (err, res) => {
//        console.log(res);
//        return res;
//        client.end();
//    });
}

tagModel.saveTagMasterData = async function (tagName, tagValue) {

    try {
        var idArray = [];
       
        
        
        const queryString = `INSERT INTO tag_master (tag_name) VALUES ('${tagName}')`;
        
        
        const res = await client.query(queryString);
        const tagId = res.insertId;
        //idArray.push(tagId);
        return idArray[tagId];
//        try {
//            const queryValue = `INSERT INTO tag_values (tag_id,tag_value, tag_status) VALUES (${tagId},'${tagValue}', 1)`;
//            const resVal = await client.query(queryValue);
//            const tagValueId = resVal.insertId;
//            idArray.push(tagValueId);
//            return idArray;
//        } catch (e) {
//            throw new Error(e)
//        }

    } catch (e) {
        throw new Error(e)
    }

    await client.close();

}
module.exports = tagModel;