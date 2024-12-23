const express = require("express");
const userRouter = require("./routes/routes.user");
const errorHandler = require("./moddlewares/errorHandler");
const authorizationMiddleware = require("./moddlewares/authMiddleware");
const authRouter = require("./routes/routes.auth");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authorizationMiddleware, userRouter);

app.use(errorHandler);

module.exports = app;
