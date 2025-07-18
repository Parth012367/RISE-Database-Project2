// backend/models/productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  reviews: [
    {
      username: String,
      comment: String,
      rating: Number
    }
  ]
});

module.exports = mongoose.model('Product', productSchema);
