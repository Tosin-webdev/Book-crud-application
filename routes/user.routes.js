const express = require("express");
const route = express.Router();

// A get request for the home page
route.get("/", (req, res) => {
  res.render("index");
});

// A get request for the about page
route.get("/add-user", (req, res) => {
  res.render("add-user");
});

// A get request for the update user
route.get("/update-user", (req, res) => {
  res.render("update-user");
});

module.exports = route;
