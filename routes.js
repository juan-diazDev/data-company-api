const router = require('./api/checkroute');
const users = require('./api/user');
const companies = require('./api/companies');

function routes(app) {
  app.use('/api/checkroute', router);

  app.use('/api/user', users);
  app.use('/api/companies', companies);
}

module.exports = routes;
