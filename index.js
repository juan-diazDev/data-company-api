require('dotenv').config();
const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    configExpress(app);

    routes(app);

    console.log(`Server running on port http://localhost:${PORT}`);
  } catch (error) {
    console.log({ ERROR: error.message });
  }
});
