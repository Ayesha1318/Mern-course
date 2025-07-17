const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;


let _db;

const MONGO_URL = "mongodb+srv://root:root@mycluster.1dae8et.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";
const mongoConnect = (callback) =>{
  MongoClient.connect(MONGO_URL).then(client =>{
    callback ();
    _db = client.db('airbnb')
  }).catch(err=>{
    console.log("Error while connecting to Mongo", err);
  })
}

const getDB = ()=>{
  if(!_db){
    throw new Error("Database is not connected");
  }
    return _db;
} 
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;