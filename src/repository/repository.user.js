const user = require("../model/model.user");
const jwt = require("../utils/jwtutils");
const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");

class UserRepository {
  async register(userData) {
    const { name, email, password, role } = userData;
    const existingUser = await user.findOne({ email: email });

    if (existingUser) {
      console.log("user already exists");
      throw new AppError("user already exists", 409);
    }

    const newUser = new user({ name, email, password, role });
    const savedUser = await newUser.save();
    const token = jwt.generateToken({
      id: savedUser._id,
      email: savedUser.email,
    });

    return { message: "user registration success", token: token };
  }

  async login(userData) {
    const { username, password } = userData;
    const email = username;

    const existingUser = await user.findOne({ email: email });

    if (!existingUser) {
      throw AppError("Invalid crdentials", 401);
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new AppError("Invalid credentials", 401);
    }
    const token = jwt.generateToken({
      id: existingUser._id,
      email: existingUser.email,
    });
    return { status: "success", message: "login successfull", token: token };
  }

  async getAllUsers() {}
}

module.exports = new UserRepository();
