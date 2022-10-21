const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../api/user/user.model');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      if (isSame) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        return res.status(201).send(user);
      }
      return res.status(401).send('Authentication failed');
    }
    return res.status(401).send('Authentication failed');
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
};

module.exports = login;
