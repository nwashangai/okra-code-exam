import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Utilities
import { mapInterfaceToComponent, titleCase } from '../../utilities';

// components
import Avatar from '../../components/Avatar';

// assets
import { close } from '../../assets/images';

// Interfaces
import { propTypes, defaultProps } from './interface.d';

// fixtures
import { navOptions, navFootOptions } from './fixtures';

// Styles
import './NavDrawer.scss';

const staticLinks = {
  Credits: 'transactions/credit',
  Debits: 'transactions/debit',
  Dasboard: '',
  Tranfers: 'transactions/transfer'
};

const component = ({ toggleNavigator, user }) => (
  <div className="nav-drawer">
    <div className="nav-drawer__head">
      <div className="nav-drawer__head__user">
        <Avatar classes="nav-drawer__head__user-avatar" url={user.avatar} />
        <div className="nav-drawer__head__user-info">
          <div className="nav-drawer__head__user-name">
            {titleCase(user.name)}
          </div>
          <div className="nav-drawer__head__user-role">
            {titleCase(user.role)}
          </div>
        </div>
      </div>
      <div className="cursor nav-drawer__head__close" onClick={toggleNavigator}>
        <img className="svg" src={close} alt="close" />
      </div>
    </div>
    <div className="nav-drawer__body">
      {navOptions.map((option, index) => (
        <Link
          onClick={toggleNavigator}
          key={index}
          to={`/${staticLinks[option.name]}`}
          style={{ textDecoration: 'none', color: 'unset' }}
        >
          <div className="cursor nav-drawer__body__option">
            <div className="nav-drawer__body__option-icon">
              <img className="svg" src={option.icon} alt="close" />
            </div>
            <div className="nav-drawer__body__option-text">{option.name}</div>
          </div>
        </Link>
      ))}
    </div>
    <div className="nav-drawer__footer">
      {navFootOptions.map((option, index) => (
        <div className="cursor nav-drawer__footer__option" key={index}>
          <div className="nav-drawer__footer__option-icon">
            <img className="svg" src={option.icon} alt="close" />
          </div>
          <div className="nav-drawer__footer__option-text">{option.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export const mapStateToProps = state => ({
  user: state.user
});

const NavDrawer = mapInterfaceToComponent(component, propTypes, defaultProps);

export default connect(mapStateToProps)(NavDrawer);
