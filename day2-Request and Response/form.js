const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method)

  // if(req.url === '/'){
  //   res.write('<html>')
  //   res.write('<head><title>Form</title></head')
  //   res.write('<body><h1>Welcome to home page</h1>')
  //   res.write('<form action="/submit" method = "POST">')
  //   res.write('<input type="text" name = "name" id="name" placeholder="Enter your name"><br>')
  //   res.write('<label for="gender">Gender:</label>')
  //   res.write('<input type="radio" id="male" name="gender" value="male">')
  //   res.write('<label for="male">Male</label>')
  //   res.write('<input type="radio" id="female" name="gender" value="female">')
  //   res.write('<label for="female">Female</label>')
  //   res.write('<br><button type="submit">Submit</button>')
  //   res.write('</form>')
  //   res.write('</body>')
  //   res.write('</html>')
  //   return res.end();
  // }
  // else if(req.method==="POST" && req.url.toLowerCase()==="/submit"){
  //   fs.writeFileSync('user-details.text','Ayesha Siddika');
  //   res.statusCode = "302";
  //   res.setHeader('Location','/');
  //   return res.end();
  // }
  // res.write('<html>');
  // res.write('<head><title>Submit</title></head>')
  // res.write('<body><h1>Submitted</h1>');
  // res.write('</body>');
  // res.write('</html>');
  // res.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})