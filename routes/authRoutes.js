/* routes/authRoutes.js - auth endpoints with health GET */
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  deactivateAccount,
  getAllUsers,
  deleteUserById
} = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

// Health / quick check
router.get("/", (req, res) => {
  res.json({ message: "Auth route working (health)", uptime: process.uptime() });
});

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected user routes
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.delete("/deactivate", protect, deactivateAccount);

// Admin routes
router.get("/admin/users", protect, admin, getAllUsers);
router.delete("/admin/users/:id", protect, admin, deleteUserById);

module.exports = router;
