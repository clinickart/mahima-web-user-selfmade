const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/', protect, async (req, res) => {
  try {
    const { search, status, timeFrame } = req.query;
    const query = { userId: req.user._id };

    if (search) {
      const products = await mongoose.model('Product').find({
        name: { $regex: search, $options: 'i' },
      }).select('_id');
      const productIds = products.map(p => p._id);
      query['items.productId'] = { $in: productIds };
    }

    if (status) {
      query.status = status;
    }

    if (timeFrame) {
      const now = new Date();
      if (timeFrame === 'Last 30 days') {
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        query.orderTime = { $gte: thirtyDaysAgo };
      }
    }

    const orders = await Order.find(query).populate('items.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/admin', protect, admin, async (req, res) => {
  try {
    const orders = await Order.find().populate('userId items.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/:id/status', protect, admin, async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


