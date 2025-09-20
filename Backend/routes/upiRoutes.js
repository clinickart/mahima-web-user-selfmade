const express = require('express');
const router = express.Router();
const UpiAccount = require('../models/UpiAccount');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/', protect, async (req, res) => {
  try {
    const upiAccounts = await UpiAccount.find({ userId: req.user._id });
    res.json(upiAccounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', protect, async (req, res) => {
  const { name, upiId } = req.body;
  try {
    const newUpi = new UpiAccount({
      userId: req.user._id,
      name,
      upiId,
    });
    await newUpi.save();
    res.status(201).json(newUpi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const deletedUpi = await UpiAccount.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!deletedUpi) {
      return res.status(404).json({ message: 'UPI account not found or user not authorized' });
    }
    res.json({ message: 'UPI account deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


