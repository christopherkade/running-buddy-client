import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes.jsx';
import fetch from 'cross-fetch';
import Navigation from './Navigation.jsx';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      connected: false,
      handleAuth: false,
      currentRoute: ''
    };
  }
  componentDidMount() {
    this.checkConnected();
  }

  checkConnected = () => {
    if (localStorage.getItem('jwt') && localStorage.getItem('email')) {
      fetch('http://localhost:3000/user/' + localStorage.getItem('email'), {
        method: 'GET',
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('jwt')
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            connected: true,
            handleAuth: true
          });
        })
        .catch(() => {
          this.setState({ connected: false, handleAuth: true });
        });
    } else {
      this.setState({ connected: false, handleAuth: true });
    }
  };

  renderComponent = (route, history) => {
    if (route !== this.state.currentRoute) {
      this.setState({ handleAuth: false, currentRoute: route });
      this.checkConnected();
    }
    if (!this.state.handleAuth) {
      return null;
    }
    if (routes[route].connected && !this.state.connected) {
      history.push('/sign-in');
    } else if (!routes[route].connected && this.state.connected) {
      history.push('/home');
    }
    return routes[route].nav
      ? [routes[route].component(history), <Navigation history={history} />]
      : routes[route].component(history);
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router basename="/running-buddy-client">
          <div>
            {Object.keys(routes).map(route => (
              <Route
                exact
                key={`route-${route}`}
                path={route}
                component={({ history }) => this.renderComponent(route, history)}
              />
            ))}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Root;
