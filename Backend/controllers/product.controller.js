const Product = require(".../models/Product");

// Fetch Products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};