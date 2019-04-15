const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const router = express.Router();

const db = require("./models");

let PORT = process.env.PORT || 3000;

const app = express();

var exphbs = require("express-handlebars");

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
app.set("view engine", "handlebars");
  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", router);

require("./routes/apiRoutes")(router);

module.exports = app;