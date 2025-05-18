const express = require('express');

const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil')

hostRouter.get("/add-home",(req,res,next)=>{
  res.render('add-home', {pageTitle:'Add Home',currentPage:'add-home'});
})

const registeredHouses = [];
hostRouter.post("/add-home",(req,res,next)=>{
  console.log("home added successful for:",req.body);
  registeredHouses.push(req.body);
  res.render('home-added', {pageTitle:'Home Added',currentPage:'home-added'});
});

exports.hostRouter = hostRouter;
exports.registeredHouses = registeredHouses;