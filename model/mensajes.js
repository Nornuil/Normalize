const { Schema, model } = require("mongoose");

const MensajeSchema = Schema({
  author: {
    id_mensaje: { type: Number, required: [true, "id_mensaje es requerido"] },
    id: { type: String, required: [true, "id es requerido"] },
    nombre: { type: String, required: [true, "nombre es requerido"] },
    apellido: { type: String, required: [true, "apellido es requerido"] },
    edad: { type: Number, required: [true, "edad es requerido"] },
    alias: { type: String, required: [true, "alias es requerido"] },
    avatar: { type: String, required: [true, "avatar es requerido"] },
  },
  text: {
    type: String,
    require: [true, "El texto es obligatorio"],
  },
});

MensajeSchema.methods.toJSON = function () {
  const { __v, ...mensaje } = this.toObject();
  return mensaje;
};

module.exports = model("Mensaje", MensajeSchema);
