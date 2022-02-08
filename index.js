const express = require('express');
const app = express();

// Other Config 
// .env
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
// MongoDB Connection
const DatabaseMongoDB = require("./config/dbConnection");
DatabaseMongoDB();

// Config Express JS
// Static File
app.use(express.static("assets"));
// Template Engine
app.set("view engine", "ejs");
// Request Handler
app.use(express.urlencoded({ extended: true })) // Type Data Form
app.use(express.json()) // Type Data JSON

//Routing 
// CORS
const cors = require("cors");
app.options("*", cors());
// Server
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server Running in Port ${PORT}`);
});

// Routing WEB
const mainRouter = require('./routes/router');
app.use(mainRouter);

// Routing API WEB
const apiWebProduct = require("./routes/web/product");
app.use("/web/product", apiWebProduct);

// Routing API
const apiAuth = require("./routes/api/auth");
app.use("/api/auth", apiAuth);
const apiProduct = require("./routes/api/product");
const authenticateToken = require("./module/authenticateToken");
app.use("/api/product", authenticateToken, apiProduct);
const apiUser = require("./routes/api/user");
app.use("/api/user", apiUser);
