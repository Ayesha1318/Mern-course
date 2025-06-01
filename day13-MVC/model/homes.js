
let registeredHouses = [];

const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtil')


module.exports = class Homes{
  constructor(houseName,price,location,rating,photo){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
  }
  save(){
    Homes.fetchAll(registeredHouses=>{
       registeredHouses.push(this);
     const homeDataPath = path.join(rootDir,'data','homes.json');
     fs.writeFile(homeDataPath,JSON.stringify(registeredHouses),error=>{
      console.log("file Writing Concluded",error);
    })
    
  })
};
  static fetchAll(callback){

    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.readFile(homeDataPath,(err,data)=>{
      console.log("File read: ",err,data);
       callback( !err ? JSON.parse(data) : [])
    });
  }
}