const User = require('./user.model');

async function getUsers() {
  const users = await User.findAll();

  return users;
}

async function getSingleUser(query) {
  const singleUser = await User.findOne(query);

  return singleUser;
}

async function createUser(user) {
  const newUser = await User.create(user);

  return newUser;
}

module.exports = {
  getUsers,
  createUser,
  getSingleUser,
};
