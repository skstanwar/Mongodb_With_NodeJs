var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const clint = new MongoClient(url);
async function main(){
 await clint.connect();
 console.log("Connect Done");
}