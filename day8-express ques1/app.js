const { urlencoded } = require('body-parser');
const path = require('path');
const express = require('express');
const app =  express();

const rootDir=require('./utils/pathUtil');
const welcomeRouter = require('./router/welcome');
const contactUs = require('./router/contact-us');
const submitted = require('./router/submitted');


app.use(express.urlencoded());

app.get("/",welcomeRouter);

app.post("/contact-us",contactUs);

app.post("/submit",submitted);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on: http://localhost:${PORT}`);
})