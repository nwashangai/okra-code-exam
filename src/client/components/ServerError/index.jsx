import React from 'react';

// Assets
import { error } from '../../assets/images';

import './ServerError.scss';

const ErrorComponent = () => (
  <div className="error-page">
    <div className="error-page__text">Server Error</div>
    <img src={error} alt="server error" />
  </div>
);

export default ErrorComponent;
