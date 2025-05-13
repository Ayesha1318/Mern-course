const { sumRequestHandler } = require('./sum');
const requestHandler = (req,res)=>{
  console.log(req.url,req.method);
  if(req.url === '/'){
    res.setHeader('Content-type','text/html');
    res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
  </head>
  <body>
   <h1>Here is the calculator</h1>
   <h2>You can calculate anything</h2>
   <a href="/calculator">Calculator</a>
  </body>
  </html>`)
  return res.end();
   }
   else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-type','text/html');
    res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
  </head>
  <body>
    <form action="/calculate-result" method="post">
      <input type="text" name="first" id="num1" placeholder="Enter first number">
      <input type="text" name="second" id="num2" placeholder="Enter second number">
      <button type="submit">SUM</button>
    </form>
   </body>
  </html>`)
  return res.end();
   }
   else if(req.url.toLowerCase() === '/calculate-result' && req.method==='POST'){
    return sumRequestHandler(req,res);
   
   }
  else{
    res.setHeader('Content-type','text/html');
    res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
  </head>
  <body>
    <h1>404 This page does not exits</h1>
  <a href="/">Go to Home</a>
   </body>
  </html>`)
  return res.end();
  }
  
}

exports.requestHandler = requestHandler;