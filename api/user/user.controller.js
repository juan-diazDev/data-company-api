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
  const userData = req.body;
  try {
    const newUser = await createUser(userData);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

module.exports = {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
};
