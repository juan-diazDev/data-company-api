const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  createUser,
  getUsers,
  getSingleUser,
} = require('./user.service');

async function getAllUsersHandler(_, res) {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

async function getSingleUserHandler(req, res) {
  try {
    const user = await getSingleUser();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

async function createUserHandler(req, res) {
  const data = req.body;

  const userData = {
    ...data,
    password: await bcrypt.hash(data.password, 10),
  };
  try {
    const newUser = await createUser(userData);

    if (newUser) {
      const token = jwt.sign(
        {
          id: newUser.id,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        },
      );
      res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
    }

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getSingleUser({ email });

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

module.exports = {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  login,
};
