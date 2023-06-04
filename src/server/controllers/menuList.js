const menuListRouter = require('express').Router();
const Menu = require('../models/menu');

menuListRouter.get('/', async (request, response) => {
  const menuList = await Menu.find({});
  response.json(menuList);
});

menuListRouter.post('/', async (request, response) => {
  const body = request.body;

  const newItem = new Menu({
    name: body.name,
    image: body.image,
    price: body.price,
    restaurant: body.restaurant,
    popularity: body.popularity,
  });

  const savedItem = await newItem.save();

  response.status(201).json(savedItem);
});

module.exports = menuListRouter;
