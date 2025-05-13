const { error } = require('console');
const fs = require('fs');

console.log("1. Start the event");

// Synchronous (blocking) operation
 console.log('2. Reading file synchroneously')
 const dataSync = fs.readFileSync('user-details.text','utf8');
 console.log('3. Synchronous read complete');

// Asynchronous operation

console.log('4. Reading file asynchroneously')
fs.readFile('user-details.text','utf8',(error,dataAsync)=>{
  if(error) throw error;
  console.log('6. Asynchronous read complete')
});
 console.log('5. End of event');