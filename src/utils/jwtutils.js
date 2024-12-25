const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (token, secret) =>
  jwt.verify(token, secret, (err, decoded) => {
    console.log("TOKEN EXPIRED");
    return null;
  });

module.exports = { generateToken, verifyToken };
