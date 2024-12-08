const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");
const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${DB_NAME}`
    );
    console.log(
      "MongoDB connection successfull : ",
      connectionInstance.connection.host,
      connectionInstance.connection.port,
      connectionInstance.connection.db.databaseName
    );
  } catch (error) {
    console.log("database connection error =>", error);
    process.exit(1);
  }
};

module.exports = connectDb;