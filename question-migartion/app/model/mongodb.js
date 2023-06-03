var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";
const client = new MongoClient(url)
const dbName = "nemr_migration_testing"
client.connect({
  poolSize: 10, ssl: true
})

module.exports = {
  MongoClient: client,
  dbName: dbName
};
