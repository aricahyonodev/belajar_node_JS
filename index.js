const express = require('express');
const app = express();
const PORT = 3000;

// Config
// Static File
app.use(express.static("assets"));
// Template Engine
app.set("view engine", "ejs");
// Server
app.listen(PORT, ()=>{
    console.log(`Server Running in Port ${PORT}`);
});

// Routing
const mainRouter = require('./routes/router');
app.use(mainRouter);

// Routing API
const apiProduct = require("./routes/api/product");
app.use(apiProduct);