require('dotenv').config();

const mongoUrl = process.env.MONGODB_URI;
const PORT = 3001;

const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const menuListRouter = require('./controllers/menuList');
const orderListRouter = require('./controllers/ordersList');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] :response-time :data'));
app.use('/menuList', menuListRouter);
app.use('/orders', orderListRouter);

mongoose.connect(mongoUrl);

morgan.token('data', (req, res) => {
  return JSON.stringify(req.body);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
