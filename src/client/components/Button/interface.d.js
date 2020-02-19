// third party library
import PropTypes from 'prop-types';

export const propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
  iconSrc: PropTypes.string,
  faIcon: PropTypes.string,
  onclick: PropTypes.func,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  alignIconRight: PropTypes.bool
};
export const defaultProps = {
  classes: ''
};
