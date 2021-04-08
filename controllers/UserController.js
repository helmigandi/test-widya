const UserModel = require("./../models/UserModel");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");
const { generateToken } = require('../helpers/jwt')

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

  static async loginHandler(req, res) {
    const {email, password} = req.body
    try {
      if (!email || !password) {
        throw new Error("email or password must be filled");
      }

      const dataUser = await UserModel.findByEmail(email);
      
      if (!dataUser) {
        res.status(401).json({message: "Invalid email/password"});
      }

      const matchPassword = comparePassword(password, dataUser.password)

      if(!matchPassword) {
        res.status(401).json({message: "Invalid email/password"})
      }

      const payloadUser = {
        _id: dataUser._id,
        email: dataUser.email,
        name: dataUser.name
      }

      const access_token = generateToken(payloadUser)

      res.status(200).json({
        access_token,
        payloadUser
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = UserController;
