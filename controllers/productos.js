const { response, request } = require("express");
const { faker } = require("@faker-js/faker");
const Producto = require("../model/productos");

const productoPost = async (req, res = response) => {
  for (let i = 0; i < 5; i++) {
    const nombre = faker.animal.type();
    const precio = faker.finance.amount();
    const foto = faker.image.avatar();
    const producto = new Producto({ nombre, precio, foto });
    // Guardar en BD
    await producto.save();
  }
  res.status(200).json({
    resultado: "ok",
  });
};

const productosGet = async (req = request, res = response) => {
  const productos = await Producto.find();
  res.json({
    productos,
  });
};

const productosDelete = async (req, res = response) => {
  //BORRA TODOS LOS DOCUMENTOS PARA PROBAR 5 NUEVOS
  await Producto.remove();
  res.status(200).json({
    resultado: "ok",
  });
};

module.exports = {
  productosGet,
  productoPost,
  productosDelete,
};
