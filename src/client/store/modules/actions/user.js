import { ADD_USER, USER_LOADING, USER_ERROR } from '../types';
import request from '../request';
import { randomNumber } from '../../../utilities/';
import { getTransactions } from './';

export const getUser = () => dispatch => {
  dispatch({
    type: USER_LOADING,
    payload: true
  });
  const userId = randomNumber(5, 0);
  request('get', `users/${userId}`)
    .then(response => {
      dispatch({
        type: ADD_USER,
        payload: response.user
      });
      dispatch(getTransactions(userId));
    })
    .catch(error => {
      dispatch({
        type: USER_ERROR,
        payload: true
      });
    });
};
