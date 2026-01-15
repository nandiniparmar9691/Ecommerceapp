const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
