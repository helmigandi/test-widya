const UserModel = require("./../models/UserModel");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");

class UserController {
  static async registerHandler(req, res) {
    const dataUser = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name || "",
      gender: req.body.gender || "",
    };
    try {
      if (!dataUser.email || !dataUser.password) {
        throw new Error("email or password must be filled");
      }
      dataUser.password = hashPassword(dataUser.password);
      const response = await UserModel.createUser(dataUser);
      res.status(201).json(response.ops[0]);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = UserController;
