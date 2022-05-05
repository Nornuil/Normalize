const { response, request } = require("express");
const mensajes = require("../model/mensajes");
const Mensaje = require("../model/mensajes");
const util = require("util");
const { normalize, schema, denormalize } = require("normalizr");

const mensajesPost = async (req, res = response) => {
  let elementos = await Mensaje.find();
  let newId;
  if (elementos.length == 0) {
    console.log(`elementos: ${elementos}`);
    newId = 1;
  } else {
    newId = elementos[elementos.length - 1].author.id_mensaje + 1;
  }
  const { author, text } = req.body;
  author.id_mensaje = newId;
  const mensaje = new Mensaje({ author, text });
  // Guardar en BD
  await mensaje.save();
  res.status(200).json({
    resultado: "ok",
  });
};

const mensajesGet = async (req = request, res = response) => {
  const mensaje = await Mensaje.find();

  res.json({
    mensaje,
    tamaño: JSON.stringify(mensaje).length,
  });
};

const mensajesNormalizadoGet = async (req = request, res = response) => {
  const mensaje = await Mensaje.find();
  const mensajeNormalizado = normalizeMensaje(mensaje);
  res.json({
    mensajeNormalizado,
    // tamaño: JSON.stringify(mensajeNormalizado).length,
    compresion: "0",
  });
};

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true));
}

function normalizeMensaje(mensaje) {
  const autoresSchema = new schema.Entity("autores");
  const mensajeSchema = new schema.Entity("mensaje", {
    id_mensaje: [autoresSchema],
    mensaje: autoresSchema,
  });

  const normalizedMensaje = normalize(mensaje, mensajeSchema);

  print(normalizedMensaje);

  console.log("Longitud objeto original: ", JSON.stringify(mensaje).length);
  console.log(
    "Longitud objeto normalizado: ",
    JSON.stringify(normalizedMensaje).length
  );
}

module.exports = {
  mensajesGet,
  mensajesPost,
  mensajesNormalizadoGet,
};
