const express = require("express");
const routes = express.Router();

routes.get("/list", (req, res) => {
  const dataProduct = require("../../data/dataProduct");
  const data = {
    message: "success",
    statusCode: 200,
    result: dataProduct,
  };
  res.send(data);
});

module.exports = routes;
