const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category && category !== 'All' ? { category } : {};
    const blogs = await Blog.find(query);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/related/:id', async (req, res) => {
  try {
    const mainBlog = await Blog.findById(req.params.id);
    if (!mainBlog) {
      return res.status(404).json({ message: 'Main blog post not found' });
    }
    const relatedBlogs = await Blog.find({
      category: mainBlog.category,
      _id: { $ne: mainBlog._id },
    }).limit(3);

    res.json(relatedBlogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/admin', protect, admin, async (req, res) => {
  const { title, description, image, category } = req.body;
  try {
    const newBlog = new Blog({ title, description, image, category });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/:id', protect, admin, async (req, res) => {
  const { title, description, image, category } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, image, category },
      { new: true, runValidators: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/admin/:id', protect, admin, async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


