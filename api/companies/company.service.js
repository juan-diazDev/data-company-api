const Company = require('./company.model');

async function getCompanies() {
  const companies = await Company.findAll();

  return companies;
}

async function getSingleCompany(query) {
  const singleCompany = await Company.findOne(query);

  return singleCompany;
}

async function createCompany(company) {
  const newCompany = await Company.create(company);

  return newCompany;
}

module.exports = {
  getCompanies,
  createCompany,
  getSingleCompany,
};
