const Home = require('../model/homes');

exports.getAddHome = (req,res,next)=>{
  res.render('host/edit-home', {
    pageTitle:'Add Home',
    currentPage:'add-home',
    editing : false,
  });
}

exports.getEditHome = (req,res,next)=>{
  const homeId= req.params.homeId;
  const editing = req.query.editing === 'true';
  Home.findById(homeId, home=>{
    if(!home){
      console.log("Home not found for editing");
     return res.redirect("/host/host-home-list");
    }
console.log(homeId,editing,home);
  res.render('host/edit-home', {
    home:home,
    pageTitle:'Edit Home',
    currentPage:'Host-home-list',
    editing : editing,
  });
  })
}

exports.getHostHome=(req,res,next)=>{
Home.fetchAll(registeredHouses=>
  res.render('host/host-home-list', { 
    registeredHouses,
    pageTitle:' Host homes List',
     currentPage:'Host-home-list',
   })
    );
};

  exports.postAddHome = (req,res,next)=>{
    console.log("home added successful for:",req.body);

    const {houseName,price,location,rating,photo} = req.body;
    const home = new Home(houseName,price,location,rating,photo);
    home.save();
    res.redirect('/host/host-home-list');
  }

  exports.postEditHome = (req,res,next)=>{
    console.log("home added successful for:",req.body);

    const {id, houseName,price,location,rating,photo} = req.body;
    const home = new Home(houseName,price,location,rating,photo);
    home.id = id;
    home.save();
    res.redirect('/host/host-home-list');
  }


  exports.postDeleteHome = (req,res,next)=>{
   const homeId = req.params.homeId;
   Home.deleteById(homeId, error=>{
    if(error){
      console.log("Error while deleting",error);
    }
    res.redirect("/host/host-home-list");
   })
   
  }

  


  
  
