const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  restaurant: String,
  popularity: Number,
});

menuSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

const MenuList = mongoose.model('MenuList', menuSchema);

module.exports = MenuList;
