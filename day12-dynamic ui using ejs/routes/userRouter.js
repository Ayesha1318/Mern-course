const express = require('express');
const path = require('path');
const userRouter = express.Router();
// const rootDir = require('../utils/pathUtil');
const { registeredHouses } = require('./hostRouter');
userRouter.get("/",(req,res,next)=>{
  console.log(registeredHouses);
  res.render('home', { registeredHouses,pageTitle:'Airbnb Home', currentPage:'home' });

})

module.exports = userRouter;