import { USER_LOADING, GET_ALL_TRANSACTION } from '../types';
import request from '../request';

export const getTransactions = userId => dispatch => {
  request('get', `${userId}/transactions`)
    .then(response => {
      dispatch({
        type: GET_ALL_TRANSACTION,
        payload: response
      });
      dispatch({
        type: USER_LOADING,
        payload: false
      });
    })
    .catch(_ => {
      throw new Error('Problem with request');
    });
};
