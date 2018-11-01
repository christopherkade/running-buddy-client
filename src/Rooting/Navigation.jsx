import React from 'react';
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle } from 'reactstrap';
import { FaUser } from 'react-icons/fa';
import './Navigation.css';
import Setting from '../Component/Setting';

const Navigation = props => (
  <div>
    <Navbar className="navbar fixed-top" light>
      <NavbarBrand>
        <a href="/home" className="title">
          Running Buddy
        </a>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown>
          <DropdownToggle className="buttonDropdown">
            <FaUser />
          </DropdownToggle>
          <Setting history={props.history} />
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
