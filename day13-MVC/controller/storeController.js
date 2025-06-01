const Home = require('../model/homes');

exports.getIndex=(req,res,next)=>{
Home.fetchAll(registeredHouses=>
  res.render('store/index', { 
    registeredHouses,pageTitle:'Airbnb Home', currentPage:'index',
   })
    );
};
exports.getHome=(req,res,next)=>{
Home.fetchAll(registeredHouses=>
  res.render('store/home-list', { 
    registeredHouses,pageTitle:'Homes List', currentPage:'home',
   })
    );
};

exports.getBookings = (req,res,next)=>{
Home.fetchAll(registeredHouses=>
  res.render('store/bookings', { 
    registeredHouses,pageTitle:'My Bookings', currentPage:'bookings',
   })
    );
};

exports.getFavouriteList = (req,res,next)=>{
Home.fetchAll(registeredHouses=>
  res.render('store/favourite-list', { 
    registeredHouses,pageTitle:'My Favourites', currentPage:'favourites',
   })
    );
};
