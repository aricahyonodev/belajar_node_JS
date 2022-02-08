const express = require("express");
const routes = express.Router();

// API
const AuthAPIControllers = require("../../controllers/auth");

routes.post("/login", AuthAPIControllers.login);

module.exports = routes;
