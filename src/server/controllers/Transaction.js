const transactions = require('../Models/TransactionModel');
const { calculateTotal } = require('../helpers');

const AllTransactions = (request, response) => {
  try {
    const { userId } = request.params;
    const userTransactions = transactions(allTransactions => {
      return allTransactions.filter(
        transaction => transaction.userId === Number(userId)
      );
    });

    const [total, creditTotal, debitTotal] = [
      Math.round(
        calculateTotal(userTransactions, 'balance', Number(userId)) * 100
      ) / 100,
      calculateTotal(userTransactions, 'credit', Number(userId)),
      calculateTotal(userTransactions, 'debit', Number(userId))
    ];

    response.status(200).json({
      total,
      creditTotal,
      debitTotal,
      transactions: userTransactions
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      message: 'Server Error'
    });
  }
};

const FilteredTransactions = (request, response) => {
  try {
    const { userId, type } = request.params;

    const filteredTransactions = transactions(allTransactions => {
      return allTransactions.filter(transaction => {
        if (type === 'transfer') {
          return (
            transaction.userId === Number(userId) &&
            transaction.description === 'bank transfer'
          );
        } else {
          return (
            transaction.userId === Number(userId) && transaction.type === type
          );
        }
      });
    });
    response.status(200).json({
      filteredTransactions
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      message: 'Server Error'
    });
  }
};

module.exports = { AllTransactions, FilteredTransactions };
