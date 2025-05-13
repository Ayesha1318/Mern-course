const express = require('express');
const path = require('path')
const welcomeRouter = express.Router();
const rootDir=require('../utils/pathUtil');
welcomeRouter.get("/",(req,res,next)=>{
  console.log("This is fourth middleware",req.url,req.method);
  res.sendFile(path.join(rootDir,'views','welcome.html'))
});

module.exports = welcomeRouter;