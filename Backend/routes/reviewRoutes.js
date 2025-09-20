const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Order = require('../models/Order');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/my', protect, async (req, res) => {
  try {
    const reviews = await Review.find({ userId: req.user._id }).populate('productId', 'name image');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/to-review', protect, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate('items.productId');
    const orderedProducts = orders.flatMap(order => order.items.map(item => item.productId._id));
    const reviewedProducts = await Review.find({ userId: req.user._id }).select('productId');
    const reviewedProductIds = reviewedProducts.map(review => review.productId);
    const productsToReview = orderedProducts.filter(productId => !reviewedProductIds.includes(productId.toString()));
    const products = await mongoose.model('Product').find({ _id: { $in: [...new Set(productsToReview)] } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', protect, async (req, res) => {
  const { productId, rating, title, reviewText } = req.body;
  try {
    const newReview = new Review({
      userId: req.user._id,
      productId,
      rating,
      title,
      reviewText,
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  const { rating, title, reviewText } = req.body;
  try {
    const review = await Review.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { rating, title, reviewText },
      { new: true }
    );
    if (!review) {
      return res.status(404).json({ message: 'Review not found or user not authorized' });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const deletedReview = await Review.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found or user not authorized' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/admin', protect, admin, async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'firstName lastName email').populate('productId', 'name image');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


