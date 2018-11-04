import React from 'react';
import './Setting.css';
import { CardBody, CardTitle, Button, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

const Setting = ({ history }) => (
  <DropdownMenu right className="dropdownMenu">
    <CardBody className="cardSetting">
      <CardTitle>Hello {localStorage.getItem('email')}</CardTitle>
      <div>
        <div>
          <div className="groupButton">
            <Link to="/session" className="sessions-button">
              <Button color="info">My sessions</Button>
            </Link>
            <Button
              onClick={() => {
                localStorage.setItem('jwt', '');
                localStorage.setItem('email', '');
                localStorage.setItem('id', '');
                history.push('/sign-in');
              }}
              color="danger"
            >
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </CardBody>
  </DropdownMenu>
);
export default Setting;
