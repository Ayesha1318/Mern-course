// const http = require('http');

// const server = http.createServer((req,res)=>{
//   console.log(req.url,req.method,req.headers)

//   res.setHeader('Content-type','text/html');
//   res.write('<html>');
//   res.write('<head><title>hiii</title></head>')
//   res.write('<body><h1>Hello!!</h1>');
//   res.write('</body>');
//   res.write('</html>');
//   res.end();
// })

// const PORT = 3000;
// server.listen(PORT,()=>{
//   console.log(`Server is running on http://localhost:${PORT}`);
// })





const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers)
  res.setHeader('Content-type','text/html');
  if(req.url==='/'){
    res.write('<html>');
  res.write('<head><title>Home page</title></head>')
  res.write('<body><h1>Welcome to home page</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  }
  else if(req.url === '/product'){
  res.write('<html>');
  res.write('<head><title>Product Page</title></head>')
  res.write('<body><h1>Here you can find all the products</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  }
  res.write('<html>');
  res.write('<head><title>hiii!!</title></head>')
  res.write('<body><h1>Hello!!</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})