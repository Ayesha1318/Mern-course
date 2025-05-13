const express = require('express');
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');
const app =  express();
app.use((req,res,next)=>{
  console.log("This is first middleware",req.url,req.method);
  next();
});
app.use((req,res,next)=>{
  console.log("This is second middleware",req.url,req.method);
  next();
});
// app.use((req,res,next)=>{
//   console.log("This is third middleware",req.url,req.method);
//   res.send('<p>Welcome to third middleware</p>')
// });

app.get("/",(req,res,next)=>{
  console.log("This is fourth middleware",req.url,req.method);
  res.send(
    `<html>
    <p>Welcome to contact-us form</p>
    <h3>here is the button for the form page</h3>
     <form action="/contact-us" method = "POST">
    <button type="submit">Submit</button>
    </form>
    </body>
   </html>`
)
  
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("This is fifth middleware",req.url,req.method);
  res.send(`<html>
<head><title>Form</title></head
<body><h1>Welcome to contact page</h1>
<form action="/submit" method="POST">
<input type="text" name = "name" placeholder="Enter your name"><br>
<input type="email" name = "email" placeholder="Enter your email">
<br><input type="submit">
</form>
</body>
</html>`)
});

app.post("/submit",(req,res,next)=>{
  console.log("This is sixth middleware",req.url,req.method,req.body);
  res.send('<p>Congratulation!Your form successfully submitted</p>');
  //the below line will redirect to the home page, before using it u have to comment out the prevoius line[res.send('<p>Congratulation!Your form successfully submitted</p>');]

  // res.redirect('/');    
  
});

const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on: http://localhost:${PORT}`);
})