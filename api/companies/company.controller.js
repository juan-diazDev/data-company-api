const {
  createCompany,
  getCompanies,
  getSingleCompany,
} = require('./company.service');

async function getAllCompaniesHandler(_, res) {
  try {
    const companies = await getCompanies();
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

async function getSingleCompanyHandler(req, res) {
  try {
    const company = await getSingleCompany();
    return res.status(200).json(company);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

async function createCompanyHandler(req, res) {
  const companyData = req.body;
  try {
    const newCompany = await createCompany(companyData);
    return res.status(200).json(newCompany);
  } catch (error) {
    return res.status(400).json({ ERROR: error.message });
  }
}

module.exports = {
  getAllCompaniesHandler,
  getSingleCompanyHandler,
  createCompanyHandler,
};
