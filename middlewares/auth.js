const UserModel = require("./../models/UserModel");
const { verifyToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
  try {
    if (!req.headers.access_token) { // access_token tidak boleh kosong
      return res
        .status(401)
        .json({
          message:
            "Invalid Authentication, The requested page needs a username and a password.",
        });
    }

    // cek akses token
    const decoded = verifyToken(req.headers.access_token);

    const dataUser = await UserModel.findById(decoded._id);

    // simpan data user ke dalam object supaya dapat di akses
    req.loginUser = {
      _id: dataUser._id,
      name: dataUser.name,
      email: dataUser.email,
    };
    next();
  } catch (err) {
    console.log(err);
    if (err.message === "invalid signature") { // access_token salah
      return res
        .status(403)
        .json({
          message:
            "Forbidden access, You are not authorized to access the file.",
        });
    }
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  authentication,
};
