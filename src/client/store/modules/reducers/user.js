// Types
import { ADD_USER, USER_LOADING, USER_ERROR } from '../types';

// Fixtures
import { defaultUserState } from './fixture';

const user = (state = defaultUserState, action) => {
  switch (action.type) {
    case USER_ERROR:
      return {
        ...state,
        isError: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        avatar: action.payload.avatar
      };
    default:
      return state;
  }
};

export default user;
