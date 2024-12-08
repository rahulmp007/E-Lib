const userService = require("../services/service.user");

class UserController {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      await userService.register({ name, email, password, role });
    } catch (error) {}
  }
  async login(req, res) {}
}

module.exports = new UserController();
