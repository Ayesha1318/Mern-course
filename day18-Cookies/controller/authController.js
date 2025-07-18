exports.getLogin=(req,res,next)=>{
  res.render('auth/login',{
    pageTitle: 'login',
    currentPage : 'login',
    isLoggedIn : false,
  })
}

exports.postLogin=(req,res,next)=>{
  console.log(req.body);
  req.session.isLoggedIn = true;
  res.redirect('/');
}

exports.postLogOut=(req,res,next)=>{
  req.session.destroy(()=>{
 res.redirect('/login');
  })
}