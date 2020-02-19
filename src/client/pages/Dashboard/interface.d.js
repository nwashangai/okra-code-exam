// third party library
import PropTypes from 'prop-types';

export const propTypes = {
  transactions: PropTypes.array,
  total: PropTypes.number,
  totalCredits: PropTypes.number,
  totalDebits: PropTypes.number,
  getUser: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool
};
export const defaultProps = {
  isLoading: false,
  isError: false
};
