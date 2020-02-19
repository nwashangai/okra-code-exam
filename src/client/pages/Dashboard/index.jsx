import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

// Componenets
import Card from '../../components/Card';
import Button from '../../components/Button';
import ServerError from '../../components/ServerError';
import Transaction from '../../components/Transaction';

// Actions
import { getUser } from '../../store/modules/actions';

// assets
import { logo, unity, credit, debit } from '../../assets/images';

// Interfaces
import { propTypes, defaultProps } from './interface.d';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Styles
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Dashboard.scss';

const DashboardComponent = ({
  transactions,
  getUser,
  isLoading,
  isError,
  total,
  totalCredits,
  totalDebits
}) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader type="Puff" color="#39B54A" height={800} width={100} />
      ) : isError ? (
        <ServerError />
      ) : (
        <div className="dashboard">
          <div className="dashboard__summary">
            <div className="dashboard__summary__wrapper">
              <div className="dashboard__summary__wrapper-logo">
                <img src={logo} alt="" />
              </div>
              <div className="dashboard__summary__wrapper-total">
                <div className="text">Total Balance</div>
                <div className="dashboard__summary__total">
                  {total.toLocaleString('en')}
                </div>
                <div className="dashboard__summary__symbol">
                  <img src={unity} alt="unity bank" />
                </div>
              </div>
              <div className="dashboard__summary__wrapper-transfer">
                <Card classes="dashboard__summary__transfer-card">
                  <div className="text dashboard__summary__transfer-title">
                    Total Credits
                  </div>
                  <div className="dashboard__summary__transfer-display">
                    <img src={credit} alt="credit" />
                    <div className="dashboard__summary__transfer-digit">
                      {totalCredits.toLocaleString('en')}
                    </div>
                  </div>
                </Card>
                <Card classes="dashboard__summary__transfer-card">
                  <div className="text dashboard__summary__transfer-title">
                    Total Debits
                  </div>
                  <div className="dashboard__summary__transfer-display">
                    <img src={debit} alt="debit" />
                    <div className="dashboard__summary__transfer-digit">
                      {totalDebits.toLocaleString('en')}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="dashboard__summary__connect">
                <Button
                  name="Connect Your Bank"
                  classes="dashboard__summary__connect__btn"
                />
              </div>
            </div>
          </div>
          <div className="dashboard__transactions-wrapper">
            <div className="dashboard__transactions-wrapper__title">
              Transactions History
            </div>
            <div className="dashboard__transactions">
              {transactions.map((data, index) => (
                <div className="dashboard__transactions-item" key={index}>
                  <Transaction data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export const mapStateToProps = state => ({
  transactions: state.wallet.transactions,
  total: state.wallet.total,
  isLoading: state.user.isLoading,
  isError: state.user.isError,
  totalCredits: state.wallet.totalCredits,
  totalDebits: state.wallet.totalDebits
});

export const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

const Dashboard = mapInterfaceToComponent(
  DashboardComponent,
  propTypes,
  defaultProps
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
