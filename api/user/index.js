const Router = require('express');

const {
  createUserHandler,
  getAllUsersHandler,
  getSingleUserHandler,
  login,
} = require('./user.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/', getSingleUserHandler); // Needs to be fixed
router.post('/login', login);

module.exports = router;
