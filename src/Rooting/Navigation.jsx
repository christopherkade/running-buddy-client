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
  CardFooter,
  Button
} from 'reactstrap';
import { FaUser } from 'react-icons/fa';
import './Navigation.css';
import Setting from '../Component/Setting';

const Navigation = props => (
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
          <Setting />
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
