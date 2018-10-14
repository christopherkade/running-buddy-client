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
          <DropdownMenu right>
            <Card className="card profileCard">
              <CardBody className="cardBody">
                <div className="cardContent">
                  <CardTitle>Hello , $name</CardTitle>
                  <CardText>
                    Your next session will be in <strong>X days</strong> at Y P.M ($day, $date of
                    $month)
                    <div className="separator" />
                    <div className="totalSessions">
                      <span className="totalSessionsNum">X</span> sessions done in total
                    </div>
                    <div className="totalDistricts">
                      <span className="totalDistrictsNum">Y</span> destricts discovered
                    </div>
                  </CardText>
                </div>
                <CardFooter className="cardFooter">
                  <Button>Profile setting</Button>
                  <Button>Sign out</Button>
                </CardFooter>
              </CardBody>
            </Card>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
