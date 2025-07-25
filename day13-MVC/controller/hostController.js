const Home = require('../model/homes');

exports.getAddHome = (req,res,next)=>{
  res.render('host/add-home', {pageTitle:'Add Home',currentPage:'add-home'});}


exports.getHostHome=(req,res,next)=>{
Home.fetchAll(registeredHouses=>
  res.render('host/host-home-list', { 
    registeredHouses,pageTitle:' Host homes List', currentPage:'Host-home-list',
   })
    );
};

  exports.postAddHome = (req,res,next)=>{
    console.log("home added successful for:",req.body);

    const {houseName,price,location,rating,photo} = req.body;
    const home = new Home(houseName,price,location,rating,photo);
    home.save();
    res.render('host/home-added', {pageTitle:'Home Added',currentPage:'home-added'});
  }
  
