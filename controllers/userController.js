const User = require('../models/User');  // Ensure you have the User model set up

// GET /user/profile - Fetch the user's profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);  // Find user by ID (stored in JWT)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Return user profile data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /user/profile - Update the user's profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;  // Get updated fields from request body
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { firstName, lastName },
      { new: true }  // Return updated user document
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Return updated user profile data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating profile' });
  }
};
