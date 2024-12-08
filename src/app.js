const express = require("express");
const userRoute = require("./routes/routes.user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

module.exports = app;
