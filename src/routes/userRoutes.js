const express = require("express");
const { userController } = require("../controllers");

const routes = express.Router();

routes.get("/:id", userController.getUserById);
routes.get("/", userController.getUsers);
routes.post("/", userController.createUser);
routes.put("/:id", userController.updateUser);

module.exports = routes;
