import React, { Component } from 'react';
import { Card, CardBody, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import fetch from 'cross-fetch';
import logo from './heartbeat.svg';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: ''
    };
  }

  loginUser = () => {
    const { emailValue, passwordValue } = this.state;
    fetch('https://dry-ocean-92944.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailValue, password: passwordValue })
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('email', emailValue);
        this.props.history.push('/home');
      });
  };

  updateEmailValue(e) {
    this.setState({
      emailValue: e.target.value
    });
  }

  updatePasswordValue(e) {
    this.setState({
      passwordValue: e.target.value
    });
  }

  render() {
    const { emailValue, passwordValue } = this.state;
    return (
      <div className="sign-in-wrapper">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="row justify-content-md-center align-items-center sign-in">
          <Card>
            <CardBody>
              <Input
                placeholder="Email"
                type="text"
                className="input input-email"
                value={emailValue}
                onChange={e => this.updateEmailValue(e)}
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
              Sign-in
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
