const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;


