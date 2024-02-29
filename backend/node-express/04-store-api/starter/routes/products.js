const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
  addProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts).post(addProduct);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
