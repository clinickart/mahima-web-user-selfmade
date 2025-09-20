const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: false },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  brand: { type: String },
  category: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


