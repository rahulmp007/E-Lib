const userRepo = require("../repository/repository.user");

class UserService {
  async register(userData) {
    return await userRepo.register(userData);
  }

  async login(userData) {
    return await userRepo.login(userData);
  }
}

module.exports = new UserService();
