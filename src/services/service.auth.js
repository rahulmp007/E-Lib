const authRepo = require("../repository/repository.auth");

class AuthService {
  async register(userData) {
    return await authRepo.register(userData);
  }

  async login(userData) {
    return await authRepo.login(userData);
  }
}

module.exports = new AuthService();
