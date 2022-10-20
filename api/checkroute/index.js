const Router = require('express');

const router = Router();

router.get('/', (_, res) => {
  try {
    res.json({ message: 'This server is running!' });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
