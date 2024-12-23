const express = require("express");
const userRouter = express.Router();
const authorizeRoles = require('../moddlewares/roleMiddleware');
const userController = require("../controller/controller.user");

userRouter.route("/getAll").get(authorizeRoles("admin"),userController.getAllUsers);
module.exports = userRouter;
