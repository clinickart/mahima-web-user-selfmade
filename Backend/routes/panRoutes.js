const express = require('express');
const router = express.Router();
const PanCard = require('../models/PanCard');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/submit', protect, upload.single('panImage'), async (req, res) => {
  const { panNumber, fullName } = req.body;
  try {
    const userPanCard = await PanCard.findOne({ userId: req.user._id });
    if (userPanCard) {
      return res.status(400).json({ message: 'PAN card already submitted for this user' });
    }

    const newPanCard = new PanCard({
      userId: req.user._id,
      panNumber,
      fullName,
      panImage: req.file.buffer.toString('base64'),
    });
    await newPanCard.save();
    res.status(201).json({ message: 'PAN card submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/my-pan', protect, async (req, res) => {
  try {
    const panCard = await PanCard.findOne({ userId: req.user._id });
    if (!panCard) {
      return res.status(404).json({ message: 'PAN card not found' });
    }
    res.json(panCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/admin', protect, admin, async (req, res) => {
  try {
    const panCards = await PanCard.find().populate('userId', 'firstName lastName email');
    res.json(panCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedPanCard = await PanCard.findByIdAndDelete(req.params.id);
    if (!deletedPanCard) {
      return res.status(404).json({ message: 'PAN card submission not found' });
    }
    res.json({ message: 'PAN card submission deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


