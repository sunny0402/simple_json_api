const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const myRoutes = require("../routes/myRoutes.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", myRoutes);

module.exports = app;
