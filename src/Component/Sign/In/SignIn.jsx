import React, { Component } from 'react';
import { Card, CardBody, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SignIn.css';
import logo from './heartbeat.svg';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
  }

  loginUser = () => {
    const { usernameValue, passwordValue } = this.state;
    // HTTP request with fetch here
  };

  updateUsernameValue(e) {
    this.setState({
      usernameValue: e.target.value
    });
  }

  updatePasswordValue(e) {
    this.setState({
      passwordValue: e.target.value
    });
  }

  render() {
    const { usernameValue, passwordValue } = this.state;
    return (
      <div className="sign-in-wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="row justify-content-md-center align-items-center sign-in">
          <Card>
            <CardBody>
              <Input
                placeholder="Username"
                className="input input-username"
                value={usernameValue}
                onChange={e => this.updateUsernameValue(e)}
              />

              <Input
                placeholder="Password"
                className="input input-password"
                type="password"
                value={passwordValue}
                onChange={e => this.updatePasswordValue(e)}
              />
            </CardBody>
            <br />
            <Button className="log-in-button" onClick={this.loginUser}>
              Log-in
            </Button>
            <Link to="/sign-up" className="sign-up-link">
              <p>Don't have a profile? Sign-up.</p>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default SignIn;
