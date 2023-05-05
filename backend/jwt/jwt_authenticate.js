const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET;

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }else if (user.role === 1) {
      console.log(user);
      next();
    }
    else{
      console.log(user);
      return res.sendStatus(401);
    }
  });

}

module.exports = {authenticateToken}