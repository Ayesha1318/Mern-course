const express = require('express');
const path = require('path');
const rootDir=require('../utils/pathUtil');
const submitted = express.Router();

submitted.post("/submit",(req,res,next)=>{
  console.log("This is sixth middleware",req.body);
  res.sendFile(path.join(rootDir,'views','submitted.html'))
  
});

module.exports= submitted;