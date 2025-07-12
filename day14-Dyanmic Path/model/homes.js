
let registeredHouses = [];

const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourite');
const homeDataPath = path.join(rootDir,'data','homes.json');

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
      if(this.id){  //edit home case
       registeredHouses = registeredHouses.map(home=>
         home.id === this.id ? this : home
        // if(home.id === this.id){
        //   return this;
        // } else{
        //   return home;
        // }
)
      }else{   //add home case
        this.id = Math.random().toString();
        registeredHouses.push(this);
      }
     fs.writeFile(homeDataPath,JSON.stringify(registeredHouses),error=>{
      console.log("file Writing Concluded",error);
    })
    
  })
};
  static fetchAll(callback){

    fs.readFile(homeDataPath,(err,data)=>{
       callback( !err ? JSON.parse(data) : [])
    });
  }
  static findById(homeId, callback){
   this.fetchAll(homes=>{
   const homeFound = homes.find(home => home.id === homeId);
   callback(homeFound);
   })
  }

  static deleteById(homeId, callback){
   this.fetchAll(homes=>{
   homes = homes.filter(home=>
         home.id !== homeId)
          fs.writeFile(homeDataPath,JSON.stringify(homes),error=>{
            Favourite.delById(homeId,callback);
          });
   })
  }


};