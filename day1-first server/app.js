//my first server


// const http = require('http');
// function requestListener(rep,res){
//   console.log(rep);
// }

// http.createServer(requestListener);


// const http = require('http');
// http.createServer(function(rep,res){
//   console.log(rep);
// })

// const http = require('http');
// http.createServer((rep,res)=>{
// console.log(rep);
// })


// const http = require('http');
// const server = http.createServer((rep,res)=>{
//   console.log(rep);
//   });
//   server.listen(3000);


const http = require('http');
const server = http.createServer((rep,res)=>{
    console.log(rep);
    });
const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server is listening from http://localhost:${PORT}`);
});