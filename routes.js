const router = require('./api/checkroute');

function routes(app) {
  app.use('/api/checkroute', router);
}

module.exports = routes;
