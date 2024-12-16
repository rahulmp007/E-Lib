const express = require("express");
const userRoute = require("./routes/routes.user");
const errorHandler = require("./moddlewares/errorHandler");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

app.use(errorHandler);


module.exports = app;
