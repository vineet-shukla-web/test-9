
var sql = require('./db.js');
var custom = require('./custom.js');
const {QueryTypes} = require('sequelize');

var tagModel = function (question) {};

tagModel.getTagMasterData = async function (tagName) {
    try {
        sqlString = `SELECT tm.*
                    FROM tag_master tm 
                    WHERE  tm.tag_name = '${tagName}'`;
         const res = await sql.query(sqlString,{type: QueryTypes.SELECT});
        return res;
    } catch (e) {
        throw new Error(e)
    }
}
tagModel.saveTagMasterData = async function (tagName) {
    try {
        sqlString = `INSERT INTO tag_master (tag_name) VALUES ('${tagName}')`;
         const res = await sql.query(sqlString,{type: QueryTypes.SELECT});
        return res.insertId;
    } catch (e) {
        throw new Error(e)
    }
}
module.exports = tagModel;