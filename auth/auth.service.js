const jwt = require('jsonwebtoken');

async function signToken(payload) {
  const token = await jwt.sign(
    payload,
    process.env.SECRET_KEY,
    { expiresIn: 1 * 24 * 60 * 60 * 1000 },
  );

  return token;
}

module.exports = {
  signToken,
};
