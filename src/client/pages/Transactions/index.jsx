import React from 'react';
import { connect } from 'react-redux';

// Utilities
import {
  mapInterfaceToComponent,
  titleCase,
  filterTransaction
} from '../../utilities';

// Component
import Transaction from '../../components/Transaction';

// Interfaces
import { propTypes, defaultProps } from './interface.d';

const params = ['transfer', 'credit', 'debit'];

const TransactionsComponent = ({ match, history, transactions }) => {
  if (!params.find(item => item === match.params.option)) {
    history.push('/');
  }

  const filterOption =
    match.params.option === 'transfer' ? 'description' : 'type';
  const filterValue =
    match.params.option === params[0]
      ? 'bank transfer'
      : match.params.option === params[1]
      ? params[1]
      : params[2];

  return (
    <div className="dashboard__transactions-wrapper">
      <div className="dashboard__transactions-wrapper__title">
        {titleCase(match.params.option)} History
      </div>
      <div className="dashboard__transactions">
        {filterTransaction(transactions, filterOption, filterValue).map(
          (data, index) => (
            <div className="dashboard__transactions-item" key={index}>
              <Transaction data={data} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  transactions: state.wallet.transactions
});

const Transactions = mapInterfaceToComponent(
  TransactionsComponent,
  propTypes,
  defaultProps
);

export default connect(mapStateToProps)(Transactions);
