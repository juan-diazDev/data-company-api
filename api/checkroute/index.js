const Router = require('express');

const router = Router();

router.get('/', (_, res) => {
  try {
    return res.json({ message: 'This server is running!' });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = router;
