const mongoose = require('mongoose');

const giftCardSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
  },
  recipientName: {
    type: String,
    required: false,
  },
  value: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GiftCard = mongoose.model('GiftCard', giftCardSchema);

module.exports = GiftCard;


