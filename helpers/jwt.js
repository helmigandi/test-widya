const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JWT_KEY || "SecReT_JWT_KeY";

// Membuat JWT token dengan data dari input user dan SECRET_KEY
function generateToken(payloadUser) {
  const token = jwt.sign(payloadUser, SECRET_KEY)
  return token
}

// Mengecek apakah token yang dimasukan sesuai dengan SECRET_KEY
function verifyToken(token) {
  const decoded = jwt.verify(token, SECRET_KEY)
  return decoded
}

module.exports = { generateToken, verifyToken }