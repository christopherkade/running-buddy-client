import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes.jsx';
import Navigation from './Navigation.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router basename="/running-buddy-client">
      <div>
        {Object.keys(routes).map(route => (
          <Route
            exact
            key={`route-${route}`}
            path={route}
            component={() =>
              routes[route].nav
                ? [routes[route].component, <Navigation />]
                : routes[route].component
            }
          />
        ))}
      </div>
    </Router>
  </Provider>
);
export default Root;
