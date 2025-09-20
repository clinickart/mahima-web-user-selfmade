const express = require("express");
const router = express.Router();

// Define your route for health check
router.get("/", (req, res) => {
  res.json({
    message: "Auth route working (health)",
    uptime: process.uptime(),
  });
});

// You can add more auth routes below, e.g. login, register, etc.
router.post("/login", (req, res) => {
  // Add your login logic here
});

module.exports = router;
