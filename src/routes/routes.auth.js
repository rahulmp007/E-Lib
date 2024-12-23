const express = require("express");
const authRouter = express.Router();

const authController = require("../controller/controller.auth");

authRouter.route("/register").post(authController.register);
authRouter.route("/login").post(authController.login);
module.exports = authRouter;
