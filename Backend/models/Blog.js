// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, sparse: true },
  excerpt: String,
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }, // change ref if needed
  tags: [String],
  published: { type: Boolean, default: false },
  publishedAt: Date,
  coverImage: String,
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
