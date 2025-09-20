const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  businessName: String,
  email: { type: String, unique: true },
  phone: String,
  gstNumber: String,
  address: String,
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema);
