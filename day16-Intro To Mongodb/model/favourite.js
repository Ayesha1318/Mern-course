const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourite {
  constructor(houseId) {
      this.houseId = houseId;
    
  }
 save(){
  const db = getDB();
  return db.collection('favourites').findOne({houseId : this.houseId}).then(existingFav=>{
    if(!existingFav){
   return db.collection('favourites').insertOne(this);
    }
    return Promise.resolve()
  });
 }

  static getFavourite() {
   const db = getDB();
 return db.collection("favourites").find().toArray();
  }

  static delById(delHomeId) {
    const db = getDB();
     return db.collection('favourites')
     .deleteOne({houseId : delHomeId});
    }
  
};
