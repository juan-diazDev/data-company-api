const Router = require('express');

const {
  createCompanyHandler,
  getAllCompaniesHandler,
  getSingleCompanyHandler,
} = require('./company.controller');

const router = Router();

router.get('/', getAllCompaniesHandler);
router.post('/', createCompanyHandler);
router.get('/', getSingleCompanyHandler); // Needs to be fixed

module.exports = router;
