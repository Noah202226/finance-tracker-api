const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const addProudct = async (req, res) => {
  // Add
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateProduct = async (req, res) => {
  // Update
  try {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body);

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteProduct = async (req, res) => {
  // Delete
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product is deleted successfully." });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProudct,
  updateProduct,
  deleteProduct,
};
