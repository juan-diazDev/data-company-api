require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const configExpress = require('./config/express');

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  configExpress(app);

  routes(app);

  console.log(`Server running on port http://localhost:${PORT}`);
});
