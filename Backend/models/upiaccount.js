const mongoose = require('mongoose');

const upiAccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  upiId: {
    type: String,
    required: true,
  },
});

const UpiAccount = mongoose.model('UpiAccount', upiAccountSchema);

module.exports = UpiAccount;


