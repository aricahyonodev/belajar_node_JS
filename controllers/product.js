const Product = require("../models/product");
const jwt = require("jsonwebtoken");

module.exports = {
  all: (req, res) => {
       Product.find()
         .then((response) => {
           res.send({
             message: `Successfull to get data`,
             statusCode: 200,
             results: response,
           });
         })
         .catch((err) => {
           res.send({
             message: `Failed to get data`,
             statusCode: 500,
           });
         });
    

    
  },

  create: (req, res) => {
    const dataProduct = new Product({
      title: "Mie Ayam",
      description: "Mie Ayam Cap Enak",
      price: 8000,
    });
    dataProduct.save((err, product)=>{
      if(err){
         res.send({
            message: `Failed to get data`,
            statusCode: 500,
        })
      }
        res.send({
          message: `Successfull Save Data`,
          statusCode: 200,
        });
    });
 },
  findOne: (req, res) => {
    Product.findById( req.params.id , (err, product) => {
      if (err) {
        res.send({
          message: `Failed to find data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Successfull Delete Data`,
        statusCode: 200,
        result: product,
      });
    });
  },

  updateOne: (req, res) => {
       Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
         if (err) {
           res.send({
             message: `Failed to Updated data`,
             statusCode: 500,
           });
         }
         res.send({
           message: `Successfull Updated Data`,
           statusCode: 200,
         });
       });
  },
  UpdateMany: (req, res) => {
     Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
       if (err) {
         res.send({
           message: `Failed to Updated data`,
           statusCode: 500,
         });
       }
       res.send({
         message: `Successfull Updated Data`,
         statusCode: 200,
       });
     });
  },


  delete: (req, res) => {
    Product.findByIdAndRemove( req.params.id , (err, product) => {
      if (err) {
        res.send({
          message: `Failed to delete data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Successfull Delete Data`,
        statusCode: 200,
      });
    });
  },
};


