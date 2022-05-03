const express = require("express");
const myController = require("../myControllers/myController");

const router = express.Router();

router
  .route("/recipes")
  .get(myController.recipelist)
  .post(myController.createRecipe)
  .put(myController.updateRecipe);

router
  .route("/recipes/details/:recipeName")
  .get(myController.ingredientsAndSteps);

module.exports = router;
