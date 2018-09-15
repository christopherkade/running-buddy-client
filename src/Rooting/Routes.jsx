import React from 'react';
import Landing from '../Component/Landing/Landing';
import SignIn from '../Component/Sign/In/SignIn';
import SignUp from '../Component/Sign/Up/SignUp';

const routes = {
  '/': {
    component: <Landing />,
    nav: false
  },
  '/sign-in': {
    component: <SignIn />,
    nav: false
  },
  '/sign-up': {
    component: <SignUp />,
    nav: false
  }
};

export default routes;
