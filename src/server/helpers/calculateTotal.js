module.exports = (transactions, option, id) => {
  let balance = 0;
  switch (option) {
    case 'balance':
      transactions.forEach(transaction => {
        if (transaction.userId === id) {
          balance +=
            transaction.type === 'credit'
              ? transaction.amount
              : -transaction.amount;
        }
      });
      return balance;

    case 'debit':
      transactions.forEach(transaction => {
        if (transaction.userId === id && transaction.type === 'debit') {
          balance += transaction.amount;
        }
      });
      return balance;

    case 'credit':
      transactions.forEach(transaction => {
        if (transaction.userId === id && transaction.type === 'credit') {
          balance += transaction.amount;
        }
      });
      return balance;

    case 'transfer':
      transactions.forEach(transaction => {
        if (
          transaction.userId === id &&
          transaction.description === 'bank transfer'
        ) {
          balance += transaction.amount;
        }
      });
      return balance;

    default:
      return balance;
  }
};
