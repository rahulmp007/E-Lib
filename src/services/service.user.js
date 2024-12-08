const userRepo = require("../repository/repository.user");

class UserService {
  async register(userData) {
    const result = await userRepo.register(userData);
    console.log(result);
    return result;
  }

  async login() {
    await userRepo.login();
  }
}

module.exports = new UserService();
