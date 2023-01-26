const {MongoClient} = require('mongodb');
const url='mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

async function getd(){
  const result=  await client.connect();
const rr= await result.db('admin');
const cc= rr.collection("saini");
const final= await cc.find({}).toArray();
console.log(final);
}
getd();