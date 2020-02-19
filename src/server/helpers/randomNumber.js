module.exports = (highest, lowest) =>
  Math.floor(Math.random() * (highest - lowest + 1)) + 1;
