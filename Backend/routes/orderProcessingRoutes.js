const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const { protect } = require('../middleware/auth');

router.post('/place-order', protect, async (req, res) => {
  const { paymentDetails } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const isPaymentSuccessful = true;

    if (!isPaymentSuccessful) {
      return res.status(400).json({ message: 'Payment failed' });
    }

    const newOrder = new Order({
      userId: req.user._id,
      items: cart.items,
      status: 'Order Placed',
    });
    await newOrder.save();

    await Cart.findOneAndDelete({ userId: req.user._id });

    res.status(201).json({
      message: 'Order placed successfully',
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


