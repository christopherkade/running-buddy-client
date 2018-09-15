import Landing from '../Component/Landing/Landing';
import SignIn from '../Component/Sign/In';

const routes = {
  '/': {
    component: Landing,
    nav: false
  },
  '/login': {
    component: SignIn,
    nav: true
  }
};

export default routes;
