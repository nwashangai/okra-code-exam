import React from 'react';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Interface
import { propTypes, defaultProps } from './interface.d';

// Styles
import './Card.scss';

const CardComponent = ({ children, classes }) => {
  return <div className={`card-main ${classes}`}>{children}</div>;
};

const Card = mapInterfaceToComponent(CardComponent, propTypes, defaultProps);

export default Card;
