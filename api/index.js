"use strict"; // Uso modo estricto para depurar errores silenciosos de JavaScript

// Importa el servidor
const server = require("./src/server");

// Importa la base de datos
const { conn } = require("./src/db");

// Importa la conexion al puerto del servidor, si no esta disponible por defecto es 3001
const port = process.env.PORT || 3001;  

// Verifico la conexion al servidor y a la base de datos
const testConection = async () => {
  try {
    await conn.authenticate();
    console.log("Conection ok");
    await conn.sync({ force: true }).then(() => {
      server.listen(port, () => {
        console.log(`%s listening at ${port}`);
      });
    });
  } catch (error) {
    console.log("Error en la conexion: ", error);
  }
};
// Ejecuta la funsion
testConection();