const bcrypt = require('bcrypt');
const { getSingleUser } = require('../api/user/user.service');
const { signToken } = require('./auth.service');

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  try {
    const user = await getSingleUser({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email or password incorrect' });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({ message: 'Email or password incorrect' });
    }
    const token = await signToken({ email: user.email });
    return res.status(200).json({ token, profile: user.profile });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = loginUserHandler;
