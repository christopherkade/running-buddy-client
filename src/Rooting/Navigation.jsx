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
import './Navigation.css';

const Navigation = props => {
  console.log(props);
  return (
    <div>
      <Navbar className="navbar fixed-top" light>
        <NavbarBrand>
          <span>Running Buddy</span>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown>
            <DropdownToggle className="buttonDropdown">
              <FaUser />
            </DropdownToggle>
            <DropdownMenu right>
              <Card className="card">
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
};

export default Navigation;
