"use strict"; // Uso modo estricto para depurar errores silenciosos de JavaScript
const axios = require("axios");
// Importa el modelos desde la base de  datos
const { Cocktail } = require("../db");
const { Router } = require("express");
const cockRouter = Router();

// Guardo en una constante la ruta de la API
const BASEURL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Brandy";

// Solicita todos los cockteles desde la API externa
cockRouter.get("/", async (req, res) => {
  try {
    // Obtener datos externos
    const externalData = await axios.get(BASEURL);

    // Transformar datos externos a objeto de cocteles
    const cocktailsInfo = externalData.data.drinks.map((e) => ({
      /* id: e.idDrink, */
      name: e.strDrink,
      tags: e.strTags,
      instructions: e.strInstructions,
      glass: e.strGlass,
      category: e.strCategory,
    }));

    // Guardar datos externos en la base de datos si no existen
    const internalData = await Cocktail.findAll();
    if (internalData.length === 0) {
      await Cocktail.bulkCreate(cocktailsInfo);
    }

    // Enviar respuesta con datos externos
    res.status(200).json(cocktailsInfo);  

  } catch (error) {
    console.log(error);
    res.status(400).json({ "Se presento un error: ": error });
  }
});


// Busca cocktel por nombre - query
cockRouter.get("/search", async (req, res) => {
  const { name } = req.query;
  // Hace la solicitud a la AIP con la query
  const externalData = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );

  try {
    const cocktailsInfo = await externalData.data.drinks.map((e) => ({
      id: e.idDrink,
      name: e.strDrink,
      tags: e.strTags,
      instructions: e.strInstructions,
      glass: e.strGlass,
      category: e.strCategory,
    }));
    // Si hay data la envia
    cocktailsInfo.length > 0
      ? res.status(200).json(cocktailsInfo)
      : res.status(404).send("No se encontro informacion.");
    // Guarda las busquedas en la base de datos
    await Cocktail.bulkCreate(cocktailsInfo);

  } catch (error) {
    console.log(error);
    res.status(400).json({ "Se presento un error: ": error });
  }
});


// Definir la ruta para borrar un cóctel seleccionado
cockRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // Valida que se pase un id
  if (!id) {
    return res.status(400).send("No se ha proporcionado un id.");
  }

  try {
    // Busca el elemento en la base de datos
    const findCocktail = await Cocktail.findOne({ where: { id: id } });
    // Valida que la data esta almacenada, si la encuentra la destruye 
    if (!findCocktail) {
      return res.status(400).send("Producto no encontrado.");
    } else {
      await findCocktail.destroy();
      return res.status(200).send("Producto eliminado correctamente.");
    };

  } catch (error) {
    console.log("Error en la solicitud: ", error);
    return res.status(400).json(error);
  };
});

module.exports = cockRouter;