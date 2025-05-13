const express = require('express');
const path = require('path')
const rootDir=require('../utils/pathUtil');
const contactUs = express.Router();

contactUs.post("/contact-us",(req,res,next)=>{
  console.log("This is fifth middleware",req.body);
  res.sendFile(path.join(rootDir,'views','contactUs.html'))
});

module.exports = contactUs;