const user = require("../model/model.user");


class UserRepository {
  
  async getAllUsers() {
    return await user.find({});
  }
}

module.exports = new UserRepository();
