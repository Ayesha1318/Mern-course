const Home = require('../model/homes');

exports.getAddHome = (req,res,next)=>{
  res.render('host/edit-home', {
    pageTitle:'Add Home',
    currentPage:'add-home',
    editing : false,
    isLoggedIn : req.session.isLoggedIn,
  });
}

exports.getEditHome = (req,res,next)=>{
  const homeId= req.params.homeId;
  const editing = req.query.editing === 'true';
  Home.findById(homeId).then((home)=>{
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
    isLoggedIn : req.session.isLoggedIn,
  });
  })
}

exports.getHostHome=(req,res,next)=>{
Home.find().then((registeredHouses)=>{
  res.render('host/host-home-list', { 
    registeredHouses,
    pageTitle:' Host homes List',
     currentPage:'Host-home-list',
     isLoggedIn : req.session.isLoggedIn,
   })
});
};

  exports.postAddHome = (req,res,next)=>{
    console.log("home added successful for:",req.body);

    const {houseName,price,location,rating,photoUrl,description} = req.body;
    const home = new Home({houseName,price,location,rating,photoUrl,description});
    home.save().then(()=>{
      console.log("Home saved successfully")
    });
    res.redirect('/host/host-home-list');
  }

  exports.postEditHome = (req,res,next)=>{
    console.log("home added successful for:",req.body);

    const {id, houseName,price,location,rating,photoUrl,description} = req.body;
      Home.findById(id).then((home)=>{
        home.houseName = houseName;
        home.price = price;
        home.location = location;
        home.rating = rating;
        home.photoUrl = photoUrl
        home.description = description;
      
      home.save().then((result)=>{
        console.log("Home updates successfully",result);
      }).catch(err=>{
        console.log("Error while editing",err)
      })
   
    res.redirect('/host/host-home-list');
    }).catch(err=>{
      console.log("Error while finding home",err)
    })
  }


  exports.postDeleteHome = (req,res,next)=>{
   const homeId = req.params.homeId;
   Home.findByIdAndDelete(homeId).then(()=>{
    
    res.redirect("/host/host-home-list");
   }).catch(error=>{
    console.log("Error while deleting",error);
   })
   
  }

  


  
  
