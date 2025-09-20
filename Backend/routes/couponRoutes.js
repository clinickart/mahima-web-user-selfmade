const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/available', protect, async (req, res) => {
  try {
    const now = new Date();
    const coupons = await Coupon.find({
      $or: [{ userId: req.user._id }, { userId: null }],
      expiry: { $gte: now },
    });
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/upcoming', protect, async (req, res) => {
  try {
    const now = new Date();
    const coupons = await Coupon.find({
      $or: [{ userId: req.user._id }, { userId: null }],
      expiry: { $lt: now },
    });
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/admin', protect, admin, async (req, res) => {
  try {
    const coupons = await Coupon.find().populate('userId', 'firstName lastName');
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/admin', protect, admin, async (req, res) => {
  const { title, description, expiry, userId } = req.body;
  try {
    const newCoupon = new Coupon({ title, description, expiry, userId });
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/:id', protect, admin, async (req, res) => {
  const { title, description, expiry, userId } = req.body;
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      { title, description, expiry, userId },
      { new: true, runValidators: true }
    );
    if (!updatedCoupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    res.json(updatedCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!deletedCoupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    res.json({ message: 'Coupon deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


