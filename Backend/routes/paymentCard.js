const express = require('express');
const router = express.Router();
const PaymentCard = require('../models/PaymentCard');
const { protect } = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
  try {
    const cards = await PaymentCard.find({ userId: req.user._id });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const deletedCard = await PaymentCard.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!deletedCard) {
      return res.status(404).json({ message: 'Card not found or user not authorized' });
    }
    res.json({ message: 'Card deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


