const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cervezaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripción: String,
  graduación: String,
  envase: String,
  precio: String,
});

const Cerveza = mongoose.model("cerveza", cervezaSchema);

module.exports = Cerveza;
