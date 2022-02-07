const express = require("express");
const routes = express.Router();

// API
const ProductAPIControllers = require("../../controllers/product");

routes.get("/all", ProductAPIControllers.all);
routes.post("/create", ProductAPIControllers.create);
routes.get("/findOne/:id", ProductAPIControllers.findOne);
routes.patch("/updateOne/:id", ProductAPIControllers.updateOne);
routes.put("/updateMany/:id", ProductAPIControllers.UpdateMany);
routes.delete("/delete/:id", ProductAPIControllers.delete);

module.exports = routes;
