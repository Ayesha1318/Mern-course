const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controller/storeController')

storeRouter.get("/",storeController.getIndex)
storeRouter.get("/bookings",storeController.getBookings)
storeRouter.get("/favourites",storeController.getFavouriteList)
storeRouter.post("/favourites",storeController.postAddToFavourite)

storeRouter.get("/home/:homeId",storeController.getHomeDetails)
storeRouter.get("/home",storeController.getHome)
storeRouter.post("/favourites/delete/:homeId",storeController.postRemoveFavourite)

module.exports = storeRouter;
