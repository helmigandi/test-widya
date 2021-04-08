const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JWT_KEY || "SecReT_JWT_KeY";

function generateToken(payloadUser) {
  const token = jwt.sign(payloadUser, SECRET_KEY)
  return token
}

function verifyToken(token) {
  const decoded = jwt.verify(token, SECRET_KEY)
  return decoded
}

module.exports = { generateToken, verifyToken }