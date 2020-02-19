// Types
import { GET_ALL_TRANSACTION } from '../types';

// Fixtures
import { defaultWalletState } from './fixture';

const Wallet = (state = defaultWalletState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTION:
      return {
        ...state,
        transactions: action.payload.transactions,
        total: action.payload.total,
        totalCredits: action.payload.creditTotal,
        totalDebits: action.payload.debitTotal
      };
    default:
      return state;
  }
};

export default Wallet;
