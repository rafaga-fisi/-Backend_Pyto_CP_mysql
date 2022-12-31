import app from './app'
import './database'

const mongoose = require("mongoose");
// SETTING
app.set("port", process.env.PORT);
// SERVER  ESCUCHANDO
app.listen(app.get("port"), () => {
  console.log("Servidor en puerto", app.get("port"));
});
