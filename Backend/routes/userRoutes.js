// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Import user controller
const authMiddleware = require('../middleware/auth');  // JWT auth middleware

// GET /user/profile - Fetch user profile
router.get('/profile', authMiddleware, userController.getUserProfile);

// PUT /user/profile - Update user profile
router.put('/profile', authMiddleware, userController.updateUserProfile);

module.exports = router;
