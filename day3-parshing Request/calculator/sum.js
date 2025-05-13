const sumRequestHandler = (req,res)=>{
   console.log("The sum of ",req.url);
   const body=[];
   req.on('data',chunk=>{
    console.log(chunk);
    body.push(chunk);
   });
   req.on('end',()=>{
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const params = new URLSearchParams(fullBody);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = parseInt(bodyObj.first) + parseInt(bodyObj.second);
    console.log(result);

    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
      </head>
      <body>
         <h1> The sum of ${bodyObj.first} and ${bodyObj.second} is ${result}</h1>
       </body>
      </html>`)
      return res.end();
   })
}
exports.sumRequestHandler = sumRequestHandler;