/** @format */

const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
  },
  { collection: "Products", timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
