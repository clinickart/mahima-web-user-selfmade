const mongoose = require('mongoose');

const flashDealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  discountedPrice: { type: Number, required: true },
  discountPercent: { type: String, required: true },
});

const FlashDeal = mongoose.model('FlashDeal', flashDealSchema);

module.exports = FlashDeal;


