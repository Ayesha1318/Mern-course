
let registeredHouses = [];

const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtil')
const favouriteDataPath = path.join(rootDir,'data','favourite.json');

module.exports = class Favourite{
  static addToFavourite(homeId, callback){
Favourite.getFavourite((favourites)=>{
  if(favourites.includes(homeId)){
    callback("Home is already marked favourite")
  }
  else{
    favourites.push(homeId);
    fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback);
    }
  })
}
  static getFavourite(callback){
    fs.readFile(favouriteDataPath,(error,data)=>{
       callback( !error ? JSON.parse(data) : [])
    });
  }

    static delById(delHomeId, callback){
     Favourite.getFavourite(homeIds=>{
     homeIds = homeIds.filter(homeId=>
           delHomeId !== homeId)
            fs.writeFile(favouriteDataPath,JSON.stringify(homeIds),callback);
     })
    }
};