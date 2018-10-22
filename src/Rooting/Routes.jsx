import React from 'react';
import Landing from '../Component/Landing/Landing';
import Dashboard from '../Component/Dashboard';
import SignIn from '../Component/Sign/In/SignIn';
import SignUp from '../Component/Sign/Up/SignUp';
import Session from '../Component/Session/index';

const routes = {
  '/': {
    component: <Landing />,
    nav: false
  },
  '/sign-in': {
    component: <SignIn />,
    nav: false
  },
  '/home': {
    component: <Dashboard />,
    nav: true
  },
  '/sign-up': {
    component: <SignUp />,
    nav: false
  },
  '/session': {
    component: <Session />,
    nav: true
  }
};

export default routes;
