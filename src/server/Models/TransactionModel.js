const { randomNumber } = require('../helpers');

const type = ['credit', 'debit'];
const description = [
  { text: 'bank transfer', type: type[0] },
  { text: 'bank transfer', type: type[0] },
  { text: 'bank transfer', type: type[0] },
  { text: 'bank transfer', type: type[1] },
  { text: 'airtime subscription', type: type[1] },
  { text: 'ikeja electric', type: type[1] }
];

const transactions = (callback = null) => {
  const generatedTransactions = [];

  for (let index = 0; index < 100; index++) {
    let random = randomNumber(3, 0);
    generatedTransactions.push({
      type: description[random].type,
      date: new Date(),
      description: description[random].text,
      userId: Math.floor(Math.random() * Math.floor(5)),
      amount:
        Math.floor(Math.random() * (10000 * 100 - 1 * 100) + 1 * 100) /
        (1 * 100)
    });
  }

  return callback ? callback(generatedTransactions) : generatedTransactions;
};

module.exports = transactions;
