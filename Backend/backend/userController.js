// backend/controllers/userController.js
const User = require('../models/User'); // Import the User model for interacting with the database

// Get the user's profile data
exports.getUserProfile = async (req, res) => {
  try {
    // Assuming that user ID is stored in the JWT token (decoded and added by auth middleware)
    const user = await User.findById(req.user.id); // Retrieve the user by their ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Return user data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update the user's profile data
exports.updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;  // Extract new data from the request body

    // Find the user by ID (from JWT token) and update their profile
    const user = await User.findByIdAndUpdate(
      req.user.id,  // Get the user by their ID
      { firstName, lastName },  // Fields to update
      { new: true }  // Return the updated user
    );
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);  // Return the updated user data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating profile' });
  }
};
