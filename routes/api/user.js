const express = require("express");
const routes = express.Router();
const UserControllers = require('../../controllers/user');
routes.get("/read", UserControllers.read);
routes.post("/create", UserControllers.create);
routes.put("/update/:id", UserControllers.update);
routes.delete("/delete/:id", UserControllers.delete);

module.exports = routes;
