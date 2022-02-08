const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization.split(" ");
    const token = authHeader[1];
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    res.send({
      message: `Failed to get data`,
      statusCode: 500,
    });
  }
};
