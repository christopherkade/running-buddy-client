import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { FaUser } from 'react-icons/fa';

const style = {
  navbar: {
    backgroundColor: '#94af76'
  },
  buttonDropdown: {
    backgroundColor: '#caa053',
    border: 'None'
  },
  card: {
    width: '350px'
  },
  span: {
    color: 'white'
  }
};

const Navigation = () => (
  <div>
    <Navbar style={style.navbar} light>
      <NavbarBrand>
        <span style={style.span}>Running Buddy</span>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown>
          <DropdownToggle style={style.buttonDropdown}>
            <FaUser />
          </DropdownToggle>
          <DropdownMenu right>
            <Card style={style.card}>
              <CardBody>
                <CardTitle>Hello , $name</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </CardText>
                <Button>Profile setting</Button>
                <Button>Sign out</Button>
              </CardBody>
            </Card>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
