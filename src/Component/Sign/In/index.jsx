import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './SignIn.css';

const SignIn = () => (
  <div className="row justify-content-md-center align-items-center signIn">
    <Card>
      <CardBody>
        <CardTitle>Sign in</CardTitle>
        <CardText>Input email Input password</CardText>
        <Button>SignIn</Button>
      </CardBody>
    </Card>
  </div>
);

export default SignIn;
