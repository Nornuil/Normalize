const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  precio: {
    type: Number,
    require: [true, "El precio es obligatorio"],
  },
  foto: {
    type: String,
    require: [true, "La foto es obligatoria"],
  },
});

ProductoSchema.methods.toJSON = function () {
  const { __v, ...producto } = this.toObject();
  return producto;
};

module.exports = model("Producto", ProductoSchema);
