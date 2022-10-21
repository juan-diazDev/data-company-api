const Router = require('express');

const {
  createProductHandler,
  getAllProductsHandler,
  getSingleProductHandler,
} = require('./product.controller');

const router = Router();

router.get('/', getAllProductsHandler);
router.post('/', createProductHandler);
router.get('/', getSingleProductHandler); // Needs to be fixed

module.exports = router;
