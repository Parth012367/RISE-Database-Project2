const Product = require('../models/productModel');

// GET all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST a new product
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
};
