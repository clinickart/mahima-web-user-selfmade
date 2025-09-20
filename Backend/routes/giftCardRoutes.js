const express = require('express');
const router = express.Router();
const GiftCard = require('../models/GiftCard');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');
const crypto = require('crypto');

router.post('/buy', protect, async (req, res) => {
  const { recipientEmail, recipientName, value, message } = req.body;
  try {
    const isPaymentSuccessful = true;
    if (!isPaymentSuccessful) {
      return res.status(400).json({ message: 'Payment failed' });
    }

    const newCode = crypto.randomBytes(8).toString('hex').toUpperCase();

    const newGiftCard = new GiftCard({
      senderId: req.user._id,
      recipientEmail,
      recipientName,
      value,
      message,
      code: newCode,
    });
    await newGiftCard.save();
    res.status(201).json(newGiftCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/my', protect, async (req, res) => {
  try {
    const giftCards = await GiftCard.find({ senderId: req.user._id });
    res.json(giftCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/admin', protect, admin, async (req, res) => {
  try {
    const giftCards = await GiftCard.find().populate('senderId', 'firstName lastName');
    res.json(giftCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedGiftCard = await GiftCard.findByIdAndDelete(req.params.id);
    if (!deletedGiftCard) {
      return res.status(404).json({ message: 'Gift card not found' });
    }
    res.json({ message: 'Gift card deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


