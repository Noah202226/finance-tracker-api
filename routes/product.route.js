const express = require("express");
const {
  getProducts,
  getProduct,
  addProudct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProudct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
