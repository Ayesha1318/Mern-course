//core module
const path = require('path');
//External Module
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const userRouter = require('./routes/userRouter');

const {hostRouter} = require('./routes/hostRouter');

const rootDir = require('./utils/pathUtil')
app.use(userRouter);

app.use(express.urlencoded({extended:true}));

app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')));
app.use((req,res,next)=>{
res.status(404).render('404',{pageTitle:'Page Not Found',currentPage:'404'});
})
const PORT = 3000;
app.listen(PORT,()=>{
console.log(`Server is running on: http://localhost:${PORT}`);
})