/* middleware/auth.js */
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token = null;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return res.status(401).json({ message: "Not authorized, token missing." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "change_this_secret");
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ message: "Not authorized, user not found." });

    req.user = { _id: user._id, email: user.email, firstName: user.firstName, isAdmin: user.isAdmin };
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ message: "Not authorized, token invalid." });
  }
};
