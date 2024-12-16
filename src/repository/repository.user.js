const user = require("../model/model.user");
const jwt = require("../utils/jwtutils");
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
    const { username } = userData;
    const email = username;
    console.log(email);

    const result = await user.findOne({ email: email });
    return result;
  }

  async getAllUsers() {}
}

module.exports = new UserRepository();
