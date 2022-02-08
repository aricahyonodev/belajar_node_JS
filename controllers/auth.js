const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
module.exports = {
  login: (req, res) => {
    const {username, password} = req.body
    const cryptr = new Cryptr('myTotalySecretKey');
    User.findOne({username }, (err, results)=>{
       if(err){
         res.send({
            message: `Failed to get data`,
            statusCode: 500,
        })
      }

      // Validasi data & compare
      if (!results || password !== cryptr.decrypt(results.password)) {
        res.send({
          message: `username & password salah`,
          statusCode: 200,
        });
      } else {
        const { username, fullname, email } = results;
        const tokenJWT = jwt.sign(
          { username, fullname, email },
          process.env.TOKEN_SECRET
        );

        const resultData = {
          username,
          fullname,
          email,
          TokenType: "Bearer",
          token: tokenJWT,
        };
        
        res.send({
          message: `Successfull Login`,
          statusCode: 200,
          results: resultData,
        });
      }
    })
  },
};
