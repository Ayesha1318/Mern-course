const Favourite = require('../model/favourite');
const Home = require('../model/homes');

exports.getIndex=(req,res,next)=>{
Home.fetchAll().then(([registeredHouses])=>{
res.render('store/index', { 
    registeredHouses,pageTitle:'Airbnb Home', currentPage:'index',
   })
});
};
exports.getHome=(req,res,next)=>{
Home.fetchAll().then((registeredHouses)=>{
  res.render('store/home-list', { 
    registeredHouses,pageTitle:'Homes List', currentPage:'home',
   })
});
};

exports.getFavouriteList = (req,res,next)=>{
  Favourite.getFavourite().then(favourites =>{
    favourites = favourites.map(fav =>
      fav.houseId
    )
Home.fetchAll().then(registeredHouses=>{
  console.log(favourites,registeredHouses)
  const favouriteHomes = registeredHouses.filter(home =>
      favourites.includes(home._id.toString()));
      res.render('store/favourite-list', { 
        favouriteHomes : favouriteHomes,
    pageTitle:'My Favourites', currentPage:'favourites',
   })
  
  });
  })
};

exports.getBookings = (req,res,next)=>{
Home.fetchAll().then((registeredHouses)=>{
res.render('store/bookings', { 
    registeredHouses,pageTitle:'My Bookings', currentPage:'bookings',
   })
 
});
};

exports.postAddToFavourite = (req,res,next)=>{
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav.save().then(result=>{
    console.log("Fav added",result);
  }).catch(err=>{
    console.log("Error while marking favourite",err);
  }).finally(()=>{
    res.redirect("/favourites");
  })
}

exports.getHomeDetails=(req,res,next)=>{
  const homeId = req.params.homeId;
  console.log("At home page: ",homeId);
  Home.findById(homeId).then((home) => {
    if(!home){
      console.log("home not found");
      res.redirect("/home");
    }
    else{
      res.render('store/home-detail', { 
      home : home,
      pageTitle:'Home Detail', 
      currentPage:'Home',
   })
    }
  })
};
 exports.postRemoveFavourite=(req,res,next)=>{
    const homeId = req.params.homeId;
    Favourite.delById(homeId).then(()=>{
      console.log("came to remove from favourites",homeId);
      res.redirect("/favourites");

    }).catch(err=>{
      console.log("error while deleting",err);
    })
  }
