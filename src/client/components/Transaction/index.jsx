import React from 'react';

// Component
import Card from '../Card';

//assets
import credit from '../../assets/images/credit.svg';
import debit from '../../assets/images/debit.svg';

// Interfaces
import { propTypes, defaultProps } from './interface.d';

// Utilities
import {
  mapInterfaceToComponent,
  titleCase,
  formatTime
} from '../../utilities';

// Style
import './Transaction.scss';

const TransactionComponent = ({ classes, data }) => (
  <Card classes={`transaction ${classes}`}>
    <div className="transaction__period">
      <div className="transaction__period__type">
        {titleCase(data.description)}
      </div>
      <div className="text transaction__period__date">
        {formatTime(data.date)}
      </div>
    </div>
    <div className="transaction__detail">
      <div
        className={`transaction__detail__amount transaction__${
          data.type === 'credit' ? 'success' : 'danger'
        }`}
      >
        {data.amount.toLocaleString('en')}
      </div>
      <div className="text transaction__detail__type">
        <img src={data.type === 'credit' ? credit : debit} alt="" />{' '}
        {titleCase(data.type)}
      </div>
    </div>
  </Card>
);

const Transaction = mapInterfaceToComponent(
  TransactionComponent,
  propTypes,
  defaultProps
);

export default Transaction;
