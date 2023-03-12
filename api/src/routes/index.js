"use strict"; // Uso modo estricto para depurar errores silenciosos de JavaScript

const { Router } = require("express");
// Importa las rutas
const cocktail = require("./coctails");


const router = Router();

// Enrutado 
router.use("/cocktails", cocktail);



module.exports = router;