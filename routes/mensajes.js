const express = require("express");
const router = express.Router();

const {
  mensajesGet,
  mensajesPost,
  mensajesNormalizadoGet,
} = require("../controllers/mensajes");

router.get("/mensajes", mensajesGet);
router.post("/mensajes", mensajesPost);
router.get("/mensajesNormalizado", mensajesNormalizadoGet);

module.exports = router;
