const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/admin', protect, admin, async (req, res) => {
  const { name, discount } = req.body;
  try {
    const newVendor = new Vendor({ name, discount });
    await newVendor.save();
    res.status(201).json(newVendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/:id', protect, admin, async (req, res) => {
  const { name, discount } = req.body;
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      { name, discount },
      { new: true, runValidators: true }
    );
    if (!updatedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(updatedVendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedVendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!deletedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json({ message: 'Vendor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


