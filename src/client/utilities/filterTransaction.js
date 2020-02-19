export default (transactions, filter, value) => {
  return transactions.filter(
    transaction => transaction[filter].toLowerCase() === value.toLowerCase()
  );
};
