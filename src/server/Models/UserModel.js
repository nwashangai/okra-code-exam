const { randomNumber } = require('../helpers');

module.exports = id => {
  const users = [
    {
      name: 'John Doe',
      role: 'Product Designer',
      avatar: `https://randomuser.me/api/portraits/men/${randomNumber(
        100,
        1
      )}.jpg`
    },
    {
      name: 'Mike Larry',
      role: 'Product Engineer',
      avatar: `https://randomuser.me/api/portraits/men/${randomNumber(
        100,
        1
      )}.jpg`
    },
    {
      name: 'Mary Kay',
      role: 'Stylist',
      avatar: `https://randomuser.me/api/portraits/women/${randomNumber(
        100,
        1
      )}.jpg`
    },
    {
      name: 'MC Anthony',
      role: 'Entertainer',
      avatar: `https://randomuser.me/api/portraits/men/${randomNumber(
        100,
        1
      )}.jpg`
    },
    {
      name: 'Stephen Bull',
      role: 'Software Developer',
      avatar: `https://randomuser.me/api/portraits/men/${randomNumber(
        100,
        1
      )}.jpg`
    }
  ];

  return users[Number(id)] ? users[Number(id)] : users[0];
};
