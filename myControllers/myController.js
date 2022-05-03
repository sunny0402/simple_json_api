const data = require("../database/data.json");

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

// A GET request to http://localhost:3000/recipes/details/garlicPasta returns:
// If recipe exists:
// Response body (JSON):
// {
// 	"details":
// 		{
// 			"ingredients": [
// 				"500mL water",
// 				"100g spaghetti",
// 				"25mL olive oil",
// 				"4 cloves garlic",
// 				"Salt"
// 			],
// 			"numSteps":5
// 		}
// }
// Status: 200
// ---
// If recipe does NOT exist:
// Response body (JSON): {}
// Status: 200

const ingredientsAndSteps = async (req, res) => {
  try {
    let recipe_name = req.params.recipeName;
    const recipeDetails = data.recipes.filter((a_recipe) => {
      return a_recipe.name === recipe_name;
    });
    return res.status(200).send({
      details: {
        ingredients: recipeDetails[0].ingredients,
        numSteps: recipeDetails[0].instructions.length,
      },
    });
  } catch (err) {
    return res.status(400).send(`There was an error: ${err}`);
  }
};

module.exports = {
  recipelist,
  ingredientsAndSteps,
};
