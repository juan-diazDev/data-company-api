const jwt = require('jsonwebtoken');

async function signToken() {
  const token = await jwt.sign(
    {
      id: newUser.id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: 1 * 24 * 60 * 60 * 1000,
    },
  );
}
