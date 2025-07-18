const favourite = require("../model/favourite");
const Favourite = require("../model/favourite");
const Home = require("../model/homes");

exports.getIndex = (req, res, next) => {
  console.log("session value:",req.session)
  Home.find().then((registeredHouses) => {
    res.render("store/index", {
      registeredHouses,
      pageTitle: "Airbnb Home",
      currentPage: "index",
      isLoggedIn : req.session.isLoggedIn,
    });
  });
};
exports.getHome = (req, res, next) => {
  Home.find().then((registeredHouses) => {
    res.render("store/home-list", {
      registeredHouses,
      pageTitle: "Homes List",
      currentPage: "home",
      isLoggedIn : req.session.isLoggedIn,
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find().populate('homeId')
  .then((favourites) => {
  const favouriteHomes = favourites.map((favourite) => favourite.homeId);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
        isLoggedIn : req.session.isLoggedIn,
      });
    });
};

exports.getBookings = (req, res, next) => {
  Home.find().then((registeredHouses) => {
    res.render("store/bookings", {
      registeredHouses,
      pageTitle: "My Bookings",
      currentPage: "bookings",
      isLoggedIn : req.session.isLoggedIn,
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  favourite.findOne({ homeId: homeId }).then((fav) => {
    if (fav) {
      console.log("Already marked as favourite", fav);
      return res.redirect("/favourites");
    } else {
      const fav = new Favourite({ homeId });
      return fav.save()
    }
})
    .then(()=>{
      res.redirect("favourites");
    }).catch((err)=>{
      console.log("Error while marking favourite",err);
    })
        
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home page: ", homeId);
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/home");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
        isLoggedIn : req.session.isLoggedIn,
      });
    }
  });
};
exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({homeId})
    .then((result) => {
      console.log("Fav Removed: ", result);
    })
    .catch((err) => {
      console.log("Error while removing favourite: ", err);
    })
    .finally(() => {
      res.redirect("/favourites");
    });
};
