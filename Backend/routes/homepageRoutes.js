const express = require('express');
const router = express.Router();
const FlashDeal = require('../models/FlashDeal');
const Review = require('../models/Review');
const FAQ = require('../models/FAQ');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/flash-deals', async (req, res) => {
  try {
    const deals = await FlashDeal.find();
    res.json(deals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/faqs', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/admin/flash-deals', protect, admin, async (req, res) => {
  const { name, image, originalPrice, discountedPrice, discountPercent } = req.body;
  try {
    const newDeal = new FlashDeal({ name, image, originalPrice, discountedPrice, discountPercent });
    await newDeal.save();
    res.status(201).json(newDeal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/flash-deals/:id', protect, admin, async (req, res) => {
  const { name, image, originalPrice, discountedPrice, discountPercent } = req.body;
  try {
    const updatedDeal = await FlashDeal.findByIdAndUpdate(
      req.params.id,
      { name, image, originalPrice, discountedPrice, discountPercent },
      { new: true, runValidators: true }
    );
    if (!updatedDeal) {
      return res.status(404).json({ message: 'Flash deal not found' });
    }
    res.json(updatedDeal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/flash-deals/:id', protect, admin, async (req, res) => {
  try {
    const deletedDeal = await FlashDeal.findByIdAndDelete(req.params.id);
    if (!deletedDeal) {
      return res.status(404).json({ message: 'Flash deal not found' });
    }
    res.json({ message: 'Flash deal deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/admin/faqs', protect, admin, async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/admin/faqs', protect, admin, async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newFaq = new FAQ({ question, answer });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/faqs/:id', protect, admin, async (req, res) => {
  const { question, answer } = req.body;
  try {
    const updatedFaq = await FAQ.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true, runValidators: true }
    );
    if (!updatedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json(updatedFaq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/faqs/:id', protect, admin, async (req, res) => {
  try {
    const deletedFaq = await FAQ.findByIdAndDelete(req.params.id);
    if (!deletedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json({ message: 'FAQ deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


