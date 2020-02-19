import React, { useState, useEffect } from 'react';
import Routes from './routes';

//componenets
import NavDrawer from './components/NavDrawer';

// assets
import { menu } from './assets/images';

// Styles
import 'Client/app.scss';

const App = () => {
  const [state, setState] = useState({ toggleNav: false });

  const toggleNav = _ => {
    setState({
      ...state,
      toggleNav: !state.toggleNav
    });
  };

  return (
    <div className="application">
      <div className="container">
        {!state.toggleNav ? (
          <img
            src={menu}
            alt="navigator"
            onClick={toggleNav}
            className="cursor show-nav"
          />
        ) : (
          <NavDrawer toggleNavigator={toggleNav} />
        )}
        <Routes />
      </div>
    </div>
  );
};

export default App;
