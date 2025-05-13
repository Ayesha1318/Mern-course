const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  res.setHeader('Content-type','text/html');
  if(req.url === "/men"){
    res.write('<body><h1>Welcome to men section</h1>')
    return res.end();
  }
  else if(req.url === "/women"){
    
    res.write('<body><h1>Welcome to women section</h1>')
 
  return res.end();
  }
  else if(req.url === "/kids")
    { 
    res.write('<body><h1>Welcome to kids section</h1>')

  return res.end();
}
  else if(req.url === "/cart")
    {
      res.write('<body><h1>It is your cart</h1>')
    return res.end();
    }

    res.write('<html>')
    res.write('<head><title>Myntra</title></head>')
    res.write('<body><h1>Welcome to myntra Home page</h1>')
    res.write('<nav>')
    res.write('<ul>')
    res.write('<li><a href="/men">Men</a></li><br>')
    res.write('<li><a href="/women">Women</a></li><br>')
    res.write('<li><a href="/kids">kids</a></li><br>')
    res.write('<li><a href="/cart">Cart</a></li>')
    res.write('</ul>')
    res.write('</nav>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
})


const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})