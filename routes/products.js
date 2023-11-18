const express = require("express");
const router = express.Router();
const {getAllProducts,getAllProductsTesting} = require("../controller/products");
console.log("routes products");
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
