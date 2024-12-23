const authorizeRoles =
  (...allowedRoles) =>
  (req, res, next) => {
    if (!allowedRoles.includes(req.user)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };

module.exports = authorizeRoles;
