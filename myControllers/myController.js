const data = require("../database/data.json");
// const fs = require("fs");

const recipelist = async (req, res) => {
  try {
    let recipeNames = [];
    data.recipes.forEach((recipe) => {
      recipeNames.push(recipe.name);
    });

    res.status(200).send({ recipeNames: recipeNames });
  } catch (err) {
    return res.status(400).send(`There was an error: ${err}`);
  }
};

const ingredientsAndSteps = async (req, res) => {
  try {
    let recipe_name = req.params.recipeName;
    const recipeDetails = data.recipes.filter((a_recipe) => {
      return a_recipe.name === recipe_name;
    });
    if (recipeDetails.length === 0) {
      throw new Error("No such recipe exists.");
    }
    return res.status(200).send({
      details: {
        ingredients: recipeDetails[0].ingredients,
        numSteps: recipeDetails[0].instructions.length,
      },
    });
  } catch (error) {
    return res.status(200).send({ error });
  }
};

const createRecipe = async (req, res) => {
  const newRecipe = req.body;
  try {
    let existing_recipes = data.recipes.map((a_recipe) => {
      return a_recipe.name;
    });

    if (existing_recipes.includes(newRecipe.name)) {
      throw error;
    }

    data.recipes.push(newRecipe);

    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).send({
      error: "Recipe already exists",
    });
  }
};

const updateRecipe = async (req, res) => {
  const updatedRecipeObject = req.body;
  try {
    let existing_recipes = data.recipes.map((a_recipe) => {
      return a_recipe.name;
    });

    if (!existing_recipes.includes(updatedRecipeObject.name)) {
      throw error;
    }

    let recipe_idx = data.recipes.indexOf(updatedRecipeObject.name);
    data.recipes.splice(recipe_idx, 1);
    data.recipes.push(updatedRecipeObject);

    return res.send(data);
  } catch (error) {
    return res.status(404).send({
      error: "Recipe does not exists",
    });
  }
};

module.exports = {
  recipelist,
  ingredientsAndSteps,
  createRecipe,
  updateRecipe,
};
