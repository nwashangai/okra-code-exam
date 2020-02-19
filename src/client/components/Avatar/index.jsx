import React from 'react';

// Interfaces
import { propTypes, defaultProps } from './interface.d';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Style
import './Avatar.scss';

const component = ({ classes, url }) => (
  <div className={`avatar ${classes}`}>
    <img src={url} alt="avatar" />
  </div>
);

const Avatar = mapInterfaceToComponent(component, propTypes, defaultProps);

export default Avatar;
