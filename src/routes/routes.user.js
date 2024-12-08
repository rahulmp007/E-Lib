const express = require("express");

const userRouter = express.Router();

const userController = require("../controller/controller.user");

userRouter.route("/register").post(userController.register);
userRouter.route("/login").post(userController.login);
module.exports = userRouter;
