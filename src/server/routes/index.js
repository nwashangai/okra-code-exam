const os = require('os');

const {
  AllTransactions,
  FilteredTransactions
} = require('../controllers/Transaction');
const User = require('../controllers/User');

const router = app => {
  app.get('/api/getUsername', (req, res) =>
    res.send({ username: os.userInfo().username })
  );

  app.get('/api/users/:userId', User);
  app.get('/api/:userId/transactions', AllTransactions);
  app.get('/api/:userId/transactions/:type', FilteredTransactions);
};

module.exports = router;
