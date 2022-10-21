const router = require('./api/checkroute');
const users = require('./api/user/index');

function routes(app) {
  app.use('/api/checkroute', router);

  app.use('/api/user', users);
}

module.exports = routes;
