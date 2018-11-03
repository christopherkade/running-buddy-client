import React from 'react';
import Landing from '../Component/Landing/Landing';
import Dashboard from '../Component/Dashboard';
import SignIn from '../Component/Sign/In/SignIn';
import SignUp from '../Component/Sign/Up/SignUp';
import Session from '../Component/Session/index';

const routes = {
  '/': {
    component: history => <Landing history={history} />,
    nav: false,
    connected: false
  },
  '/sign-in': {
    component: history => <SignIn history={history} />,
    nav: false,
    connected: false
  },
  '/home': {
    component: history => <Dashboard history={history} />,
    nav: true,
    connected: true
  },
  '/sign-up': {
    component: history => <SignUp history={history} />,
    nav: false,
    connected: false
  },
  '/session': {
    component: history => <Session history={history} />,
    nav: true,
    connected: true
  }
};

export default routes;
