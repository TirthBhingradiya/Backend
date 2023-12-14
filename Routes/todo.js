const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/createTodo")


routes.route("/").get(controllers.home);
   
routes.route("/register").post(controllers.register);

module.exports = routes