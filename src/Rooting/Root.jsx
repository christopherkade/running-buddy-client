import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes.js';
import Navigation from './Navigation.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        {Object.keys(routes).map(route => (
          <Route exact key={`route-${route}`} path={route} component={routes[route].component} />
        ))}
      </div>
    </Router>
  </Provider>
);
export default Root;
