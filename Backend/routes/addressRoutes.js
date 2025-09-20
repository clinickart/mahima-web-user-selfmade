const express = require('express');
const router = express.Router();
const Address = require('../models/Address');
const { protect } = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.user._id });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', protect, async (req, res) => {
  const { name, phone, pincode, locality, address, city, state, landmark, altPhone, type } = req.body;
  try {
    const newAddress = new Address({
      userId: req.user._id,
      name,
      phone,
      pincode,
      locality,
      address,
      city,
      state,
      landmark,
      altPhone,
      type,
    });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  const { name, phone, pincode, locality, address, city, state, landmark, altPhone, type } = req.body;
  try {
    const updatedAddress = await Address.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { name, phone, pincode, locality, address, city, state, landmark, altPhone, type },
      { new: true }
    );
    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found or user not authorized' });
    }
    res.json(updatedAddress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const deletedAddress = await Address.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!deletedAddress) {
      return res.status(404).json({ message: 'Address not found or user not authorized' });
    }
    res.json({ message: 'Address deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


