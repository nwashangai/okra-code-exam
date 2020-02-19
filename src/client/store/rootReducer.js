import { combineReducers } from 'redux';

import { wallet, user } from './modules/reducers/';

export default combineReducers({ wallet, user });
