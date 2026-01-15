const User = require(".../models/User");

// Add to Cart
exports.addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  const user = await User.findById(userId);
  user.cart.push(productId);
  await user.save();

  res.json({ message: "Product added to cart" });
};

// Fetch Cart
exports.getCart = async (req, res) => {
  const user = await User.findById(req.params.userId).populate("cart");
  res.json(user.cart);
};