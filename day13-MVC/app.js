//core module
const path = require('path');
//External Module
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const storeRouter = require('./routes/storeRouter');

const hostRouter = require('./routes/hostRouter');

const rootDir = require('./utils/pathUtil');
const errorController = require('./controller/error');
app.use(storeRouter);

app.use(express.urlencoded({extended:true}));

app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')));
app.use(errorController.get404);
const PORT = 3000;
app.listen(PORT,()=>{
console.log(`Server is running on: http://localhost:${PORT}`);
})