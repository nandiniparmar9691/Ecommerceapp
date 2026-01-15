const User = require(".../models/User");

// Register
exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ message: "User registered", userId: user._id });
};

// Login 
exports.login = async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ userId: user._id, name: user.name });
};