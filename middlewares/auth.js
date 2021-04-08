const UserModel = require("./../models/UserModel");
const { verifyToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
  try {
    const decoded = verifyToken(req.headers.access_token);

    const dataUser = await UserModel.findById(decoded._id);

    req.loginUser = {
      _id: dataUser._id,
      name: dataUser.name,
      email: dataUser.email,
    };
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  authentication,
};
