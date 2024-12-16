const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const schema = mongoose.Schema;

const userSchema = schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must be of atleast 3 character long"],
    maxLength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must be of atleast 6 character long"],
    maxLength: [25, "Password cannot exceed 25 character long"],
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
