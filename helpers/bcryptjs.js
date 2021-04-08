const bcrypt = require("bcryptjs");

// Membuat hash pasword dengan password yang di input sebagai parameter
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed; //hashed password
}

// Mengecek apakah password yang diinput user sama dengan hashed password yang ada di mongodb
function comparePassword(password, hashed) {
  return bcrypt.compareSync(password, hashed); //true or false
}

module.exports = { hashPassword, comparePassword };
