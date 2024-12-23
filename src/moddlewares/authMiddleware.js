const { verifyToken } = require("../utils/jwtutils");
const user = require("../model/model.user");

const authorizationMiddleware = async (req, res, next) => {
  console.log("in auth middleware");
  const bearerToken = req.headers["authorization"];
  const token = bearerToken && bearerToken.split(" ")[1];
  console.log(`token :=> ${token}`);

  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }

  const verifiedUser = verifyToken(token, process.env.JWT_SECRET);

  if (!verifiedUser) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const authorizedUser = await user.find({ email: verifiedUser["email"] });
  console.log(`authorizedUser => ${authorizedUser}`);

  req.user = authorizedUser;

  next();
};

module.exports = authorizationMiddleware;
