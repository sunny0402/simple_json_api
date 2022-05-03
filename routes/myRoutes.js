const express = require("express");
const myController = require("../myControllers/myController");

const router = express.Router();

router
  .route("/recipes")
  .get(myController.recipelist)
  .post(myController.createRecipe);

router
  .route("/recipes/details/:recipeName")
  .get(myController.ingredientsAndSteps);

module.exports = router;
