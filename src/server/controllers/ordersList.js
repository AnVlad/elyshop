const orderListRouter = require('express').Router();
const Order = require('../modules/order');

orderListRouter.get('/', async (request, response) => {
  const orderList = await Order.find({});
  response.json(orderList);
});

orderListRouter.post('/', async (request, response) => {
  const body = request.body;

  const newItem = new Order({
    cartList: body.cartList,
    userInformation: body.userInformation,
  });

  const savedItem = await newItem.save();

  response.status(201).json(savedItem);
});

module.exports = orderListRouter;
