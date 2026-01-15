const express = require("express");
const router = express.Router();
const { addToCart, getCart } = require("../controllers/cart.controller");

router.post("/cart", addToCart);
router.get("/cart/:userId", getCart);

module.exports = router;