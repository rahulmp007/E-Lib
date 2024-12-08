const user = require("../model/model.user");

class UserRepository {
  async register(userData) {
    const { name, email, password, role } = userData;
    const newUser = new user({ name, email, password, role });
    await newUser.save();
  }

  async login() {}
}

module.exports = new UserRepository();
