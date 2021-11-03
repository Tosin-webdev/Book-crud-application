const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/user.controller");

// A get request for the home page
route.get("/", services.homeRoutes);

// A get request for the about page
route.get("/add_user", services.adduser);

// A get request for the update user
route.get("/update_user", services.updateuser);

// APIs
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
