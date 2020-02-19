// react libraries
import * as React from 'react';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Interfaces
import { propTypes, defaultProps } from './interface.d';

// styles
import './Button.scss';

const ButtonComponent = ({
  name,
  classes,
  iconSrc,
  faIcon,
  onclick,
  isActive,
  disabled,
  size,
  alignIconRight
}) => {
  size = !size ? 'regular' : size;
  const classNames = !isActive ? `button ${size}` : `button active ${size}`;
  const classList = `${
    classes ? `${classNames} ${classes}` : `${classNames}`
  } ${alignIconRight && 'right'} ${disabled && 'disabled'}`.trim();

  const icon = iconSrc ? (
    <img src={iconSrc} alt="Button icon" />
  ) : (
    <i className={`button-icon ${faIcon}`}> </i>
  );

  const renderButtonContent = () => (
    <>
      {icon}
      {name}
    </>
  );
  return (
    <button className={classList} onClick={onclick}>
      {renderButtonContent()}
    </button>
  );
};

const Button = mapInterfaceToComponent(
  ButtonComponent,
  propTypes,
  defaultProps
);

export default Button;
