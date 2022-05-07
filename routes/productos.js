const express = require("express");
const router = express.Router();

const {
  productosGet,
  productoPost,
  productosDelete,
} = require("../controllers/productos");

router.get("/", productosGet);
router.post("/", productoPost);
router.delete("/", productosDelete);

module.exports = router;
