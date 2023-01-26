var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017";

MongoClient.connect(url , function(err , db){
  if(err) throw err;
  console.log("Connection is done!!");
const dbo= db.db('admin');
dbo.createCollection('NewC' , function(err, res){
  if(err) throw err;
  console.log("New Collection is created !!");

})
var obj ={

  Year:
  "1991",
  Industry_aggregation_NZSIOC:
  "Level_N",
  Industry_code_NZSIOC:
  "1111",
  Industry_name_NZSIOC:
  "STAR BUILDING MAINTAINANCE LLC"
  

}
dbo.collection('test_file').insertOne(obj , function(err, res){
  if(err) throw err;
  console.log("data Inserted");
})



db.close();

})