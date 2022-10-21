const router = require('./api/checkroute');
const users = require('./api/user');
const companies = require('./api/companies');
const products = require('./api/products');

function routes(app) {
  app.use('/api/checkroute', router);

  app.use('/api/user', users);
  app.use('/api/companies', companies);
  app.use('/api/products', products);
}

module.exports = routes;
