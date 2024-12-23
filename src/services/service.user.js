const userRepo = require("../repository/repository.user");

class UserService {

  async getAll() {
    return await userRepo.getAllUsers();
  }
}

module.exports = new UserService();
