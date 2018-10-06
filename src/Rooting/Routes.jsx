import React from 'react';
import Landing from '../Component/Landing/Landing';
import SignIn from '../Component/Sign/In';
import Dashboard from '../Component/Dashboard';

const routes = {
  '/': {
    component: <Landing />,
    nav: false
  },
  '/login': {
    component: <SignIn />,
    nav: true
  },
  '/home': {
    component: <Dashboard />,
    nav: true
  }
};

export default routes;
