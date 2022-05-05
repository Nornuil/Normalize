const express = require("express");
const router = express.Router();

const {
  productosGet,
  productoPost,
  // productosPut,
  productosDelete,
} = require("../controllers/productos");

router.get("/", productosGet);
router.post("/", productoPost);
// router.put("/:id", productosPut);
router.delete("/", productosDelete);

module.exports = router;
