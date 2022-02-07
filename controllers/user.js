const User = require("../models/user")

module.exports = {
    create : (req, res) => {
        const dataUser = new User({
          username: req.body.username,
          password: req.body.password,
          fullname: req.body.fullname,
          email: req.body.email,
          age: req.body.age,
          description: req.body.description,
        });

            dataUser.save((err, user)=>{
                if (err) {
                  res.send({
                    message: `Failed to get data`,
                    statusCode: 500,
                  });
                }
                res.send({
                  message: `Successfull Save Data`,
                  statusCode: 200,
                });
            });
    },
    read : (req, res) => {
        User.find().then((response) => {
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
    update : (req, res) => {
      User.findByIdAndUpdate(
        req.params.id,
        {
          username: req.body.username,
          password: req.body.password,
          fullname: req.body.fullname,
          email: req.body.email,
          age: req.body.age,
          description: req.body.description,
        },
        (err, product) => {
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
        }
      );
    },
    delete : (req, res) => {
         User.findByIdAndRemove(req.params.id, (err, product) => {
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
}