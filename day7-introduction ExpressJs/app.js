
const express = require('express');

const requestHandler = require('./user');
const app = express();
app.get("/",(req, res , next)=>{
    console.log("First middleware",req.method,req.url);
    next();
});
 app.post("/submit-details",(req, res, next)=>{
  console.log("Second middleware",req.method,req.url);
  res.send('<p>Welcome to home page</p>')
 });
 app.use("/",(req, res , next)=>{
  console.log("another middleware",req.method,req.url);
  res.send('<p>Welcome to another page</p>')
});
const PORT = 3000
app.listen(PORT,()=>{
  console.log(`Server is running on: http://localhost:${PORT}`)
})