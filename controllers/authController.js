/* controllers/authController.js */
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "change_this_secret", { expiresIn: "30d" });
};

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password, gender } = req.body;
    if (!firstName || !email || !mobileNumber || !password) {
      return res.status(400).json({ message: "firstName, email, mobileNumber and password are required." });
    }
    const existing = await User.findOne({ $or: [{ email }, { mobileNumber }] });
    if (existing) return res.status(400).json({ message: "User already exists." });

    const user = await User.create({ firstName, lastName, email, mobileNumber, password, gender });
    return res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      gender: user.gender,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("registerUser error:", err);
    return res.status(500).json({ message: "Server error registering user." });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) return res.status(400).json({ message: "identifier and password are required." });

    const user = await User.findOne({ $or: [{ email: identifier }, { mobileNumber: identifier }] });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    return res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      gender: user.gender,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("loginUser error:", err);
    return res.status(500).json({ message: "Server error logging in." });
  }
};

exports.getProfile = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authorized." });
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.json(user);
  } catch (err) {
    console.error("getProfile error:", err);
    return res.status(500).json({ message: "Server error fetching profile." });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, gender } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.mobileNumber = mobileNumber || user.mobileNumber;
    user.gender = gender || user.gender;

    await user.save();

    return res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      gender: user.gender,
      isAdmin: user.isAdmin
    });
  } catch (err) {
    console.error("updateProfile error:", err);
    return res.status(500).json({ message: "Server error updating profile." });
  }
};

exports.deactivateAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found." });
    await user.remove();
    return res.json({ message: "Account deactivated successfully." });
  } catch (err) {
    console.error("deactivateAccount error:", err);
    return res.status(500).json({ message: "Server error deactivating account." });
  }
};

// Admin controllers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (err) {
    console.error("getAllUsers error:", err);
    return res.status(500).json({ message: "Server error fetching users." });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found." });
    await user.remove();
    return res.json({ message: "User removed successfully." });
  } catch (err) {
    console.error("deleteUserById error:", err);
    return res.status(500).json({ message: "Server error deleting user." });
  }
};
