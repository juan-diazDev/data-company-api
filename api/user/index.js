const Router = require('express');

const {
  createUserHandler,
  getAllUsersHandler,
  getSingleUserHandler,
} = require('./user.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/', getSingleUserHandler); // Needs to be fixed

module.exports = router;
