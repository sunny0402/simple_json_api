const express = require("express");
const myController = require("../myControllers/myController");

const router = express.Router();

router.route("/recipes").get(myController.recipelist);

module.exports = router;
