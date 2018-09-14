import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
          {Object.keys(routes).map((route) => <Route exact key={`route-${route}`} path={route} component={routes[route]} />)}
        </div>
    </Router>
  </Provider>
);
//<Route key={`route-${route}`} path={route} component={routes[route]} />)}
export default Root;
