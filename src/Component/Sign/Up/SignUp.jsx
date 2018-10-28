import React, { Component } from 'react';
import { Card, CardBody, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import fetch from 'cross-fetch';
import './SignUp.css';
import logo from '../In/heartbeat.svg';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: '',
      usernameValue: '',
      passwordValue: ''
    };
  }

  signUpUser = () => {
    const { emailValue, usernameValue, passwordValue } = this.state;
    fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailValue, password: passwordValue, username: usernameValue })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
    const { emailValue, usernameValue, passwordValue } = this.state;
    return (
      <div className="sign-up-wrapper">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="row justify-content-md-center align-items-center sign-up">
          <Card>
            <CardBody>
              <Input
                placeholder="E-mail"
                type="email"
                className="input input-email"
                value={emailValue}
                onChange={e => this.updateEmailValue(e)}
              />

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
            <Button className="sign-up-button" onClick={this.signUpUser}>
              Sign-up
            </Button>
            <Link to="/sign-in" className="sign-in-link">
              <p>Already have a profile? Sign-in.</p>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default SignUp;
