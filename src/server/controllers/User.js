const user = require('../Models/UserModel');

module.exports = (request, response) => {
  try {
    const { userId } = request.params;

    const userData = user(Number(userId));
    response.status(200).json({
      user: userData
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      message: 'Server Error'
    });
  }
};
