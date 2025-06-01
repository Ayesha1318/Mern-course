const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controller/storeController')

storeRouter.get("/",storeController.getIndex)
storeRouter.get("/bookings",storeController.getBookings)
storeRouter.get("/favourites",storeController.getFavouriteList)
storeRouter.get("/home",storeController.getHome)

module.exports = storeRouter;
