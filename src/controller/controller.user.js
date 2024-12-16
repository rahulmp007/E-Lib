const userService = require("../services/service.user");

class UserController {
  async register(req, res, next) {
    try {
      const { name, email, password, role } = req.body;

      const result = await userService.register({
        name,
        email,
        password,
        role,
      });

      console.log(result);

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const result = await userService.login({ username, password });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
