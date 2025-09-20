const mongoose = require('mongoose');

const classmateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String },
  age: { type: Number },
  gender: { type: String },
  icons: [String],
  peopleFromSameClass: [classmateSchema],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


