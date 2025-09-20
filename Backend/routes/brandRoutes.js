// routes/brandRoutes.js
const express = require('express');
const router = express.Router();

// Match exact filename in models/ (Brand.js)
const Brand = require('../models/Brand');

// GET /api/brands
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    console.error('GET /api/brands error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/brands
router.post('/', async (req, res) => {
  try {
    const newBrand = new Brand(req.body);
    await newBrand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    console.error('POST /api/brands error:', err);
    res.status(400).json({ message: 'Invalid data' });
  }
});

module.exports = router;
