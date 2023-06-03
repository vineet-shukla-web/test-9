const fetch = require('node-fetch');
const logger = require('morgan');
var express = require('express');
var app = express();
var mysql = require('mysql');
var async = require('async');
var colors = require('colors');
require('dotenv').config();
const Excel = require('exceljs');
var fns = {};
//set NODE_TLS_REJECT_UNAUTHORIZED=0 //run command before run

app.use(logger('dev'));
colors.enable()
var config = {
    dev: {
        host: "172.29.57.206",
        port: "3306",
        user: "root",
        password: "mind",
        database: "centraldb"
    }
}
var cdb = mysql.createConnection(config.dev);
cdb.connect(function (err) {
    if (err) {
        console.log(err);
        return err;
    }
    async.waterfall([function (callback) {
        var sql = ` SELECT t.TenantId,t.Name as TenantName,b.BuildingId,bc.URL FROM buildingconfig bc
        INNER JOIN building b on b.BuildingId=bc.BuildingId
        INNER JOIN tenant t on t.TenantId=b.TenantId
        where b.IsDeleted=0 AND t.IsDeleted=0 AND bc.URL IS NOT NULL AND bc.URl<>'' limit 10`;
        cdb.query(sql, function (err, results) {
            if (err) {
                console.log('----------- err', err);
                return callback(err);
            }
            callback(null, results)
        })
    }], function (err, result) {
        var finalArray = [];
        var count = 0;
        result.forEach(element => {
            count++;
            var url = process.env.BASE_URL + "/" + element.URL;
            fetch(url)
                .then(function (response) {
                    return response.text();
                })
                .then(function (res) {
                    let result = res.match(/404/) || res.match(/504/) || res.match(/502/);
                    if (result == '404') {
                        finalArray.push({
                            TenantId: element.TenantId,
                            TenantName: element.TenantName,
                            URL: url,
                            Status: ' --- Page not found --- 404'
                        })
                        console.log(url + ' --- Page not found --- 404'.red);
                    } else if (result == '504') {
                        finalArray.push({
                            TenantId: element.TenantId,
                            TenantName: element.TenantName,
                            URL: url,
                            Status: ' --- The request could not be satisfied --- 504'
                        })
                        console.log(url + ' --- The request could not be satisfied --- 504'.red);
                    } else if (result == '502') {
                        finalArray.push({
                            TenantId: element.TenantId,
                            TenantName: element.TenantName,
                            URL: url,
                            Status: ' --- ERROR: Bad gaetway --- 502'
                        })
                        console.log(url + ' --- ERROR: Bad gaetway --- 502'.red);
                    } else {
                        finalArray.push({
                            TenantId: element.TenantId,
                            TenantName: element.TenantName,
                            URL: url,
                            Status: url + ' ---- success --- 200'
                        })
                        console.log(url + ' ---- success --- 200'.green);
                    }
                    const workbook = new Excel.Workbook();
                    const worksheet = workbook.addWorksheet('Data');
                    worksheet.columns = [
                        { header: 'TenantId', key: 'TenantId' },
                        { header: 'TenantName', key: 'TenantName' },
                        { header: 'URL', key: 'URL' },
                        { header: 'Status', key: 'Status' },

                    ];
                    finalArray.forEach(item => {
                        worksheet.addRow(item);
                    });
                    workbook.xlsx.writeFile('data.xlsx')
                       // .then(() => //console.log('Excel file written successfully'));
                }).catch((err) => {
                    console.log(err);
                })
        });
    })
});
