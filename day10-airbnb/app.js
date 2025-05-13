//core module
const path = require('path');
//External Module
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');

const hostRouter = require('./routes/hostRouter');

const rootDir = require('./utils/pathUtil')
app.use(userRouter);

app.use(express.urlencoded({extended:true}));

app.use("/host",hostRouter);

app.use((req,res,next)=>{
res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
const PORT = 3000;
app.listen(PORT,()=>{
console.log(`Server is running on: http://localhost:${PORT}`);
})