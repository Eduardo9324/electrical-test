"use strict"; // Uso modo estricto para depurar errores silenciosos de JavaScript

const { DataTypes } = require("sequelize");
// Modelo que sera la tabla en la base de datos
module.exports = (sequelize) => {
  sequelize.define(
    "cocktail",
    {
      name: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.STRING,
      },
      instructions: {
        type: DataTypes.STRING,
      },
      glass: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};