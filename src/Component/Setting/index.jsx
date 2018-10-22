import React, { Component } from 'react';
import './Setting.css';
import { CardBody, CardTitle, Button, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalProfile from './ModalProfile';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  render() {
    const { modal } = this.state;
    return (
      <React.Fragment>
        <DropdownMenu right className="dropdownMenu">
          <CardBody className="cardSetting">
            <CardTitle>Hello $Name</CardTitle>
            <div>
              <div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="language">
                      Language
                    </label>
                  </div>
                  <select className="custom-select" id="language">
                    <option value="en" selected>
                      English
                    </option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <div className="groupButton">
                  <Button onClick={this.toggleModal}>Change profile</Button>
                  <Link to="/session">
                    <Button color="info">My sessions</Button>
                  </Link>
                  <Button color="danger">Sign out</Button>
                </div>
              </div>
            </div>
          </CardBody>
        </DropdownMenu>
        <ModalProfile toggleModal={this.toggleModal} modal={modal} />
      </React.Fragment>
    );
  }
}

export default Setting;
