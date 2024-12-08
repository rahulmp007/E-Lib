const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  borrowHistory: [
    {
      type: schema.Types.ObjectId,
      ref: "BorrowHistory",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
