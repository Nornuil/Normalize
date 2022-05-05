const mongoose = require("mongoose");

const dbConnection = async (db) => {
  console.log("Contectó a mongo");

  try {
    await mongoose.connect(process.env.MONGODB_CONEX, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en iniciar la base de datos");
  }
};

module.exports = { dbConnection };
