const express = require("express");
const routes = express.Router();
routes.get("/", (req, res) => {
  const data = {
    navValue: "white",
    heroHeader: {
      bgImg: "blur-branches",
      title: "ART OF PLANT",
      text: "All About Art of Nature",
    },
    footerValue: null,
    aboutPostition: null,
  };
  res.render("home", data);
});

const dataMoreImage = require("../data/dataDetail");
routes.get("/detail", (req, res) => {
  const data = {
    navValue: "white",
    dataMoreImage,
    aboutPostition: "about-image-right",
    footerValue: "green",
  };
  res.render("detail", data);
});

const product = require("../data/dataProduct");
routes.get("/product", (req, res) => {
  const data = {
    navValue: "green",
    heroHeader: {
      bgImg: "taman",
      title: "All Products Here",
      text: "We brings our best product to you",
    },
    listProduct: product,
    footerValue: "green",
  };
  console.log(data);
  res.render("product", data);
});
module.exports = routes;