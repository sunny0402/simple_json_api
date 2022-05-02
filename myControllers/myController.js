const data = require("../database/data.json");

const recipelist = async (req, res) => {
  try {
    let recipeNames = [];
    data.recipes.forEach((recipe) => {
      recipeNames.push(recipe.name);
    });
    res.status(200).json(recipeNames);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  recipelist,
};
