//importa, el resultado de express se guarda en app, es la instancia de nuestro servidor
const express = require("express");
const cervezasRouter = require("./cervezasRouter.js");
const app = express();

const path = require("path");

const staticRoute = path.join(__dirname, "public");
//cuando reciba una petición le responderemos:
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});
//que el servicio responderá en este puerto (localhost:3000)

app.use("/static", express.static(staticRoute));
//si alguien pide cervezas le voy a enroutar yo la peticion, es una especie de middelware intermedio que genera otra ruta.
app.use("/cervezas", cervezasRouter);
app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
});
app.get("/bancos", function (req, res) {
  res.send("Aquí deberían aparecer los bancos");
});

app.get("/contactar", function (req, res) {
  res.send("Página para contactar");
});
app.listen(3000);
