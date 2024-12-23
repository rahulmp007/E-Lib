const userService = require("../services/service.user");

class UserController {
  

  async getAllUsers(req, res, next) {
    try {
      const result = await userService.getAll();
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
