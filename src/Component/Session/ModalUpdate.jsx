import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Session.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label
} from 'reactstrap';

class ModalSession extends Component {
  constructor(props) {
    super(props);
    this.state = { desc: '', name: '', date: new Date(), address: '', district: 0 };
  }

  createSession = () => {
    const { desc, name, date, address, district } = this.state;
    fetch('https://dry-ocean-92944.herokuapp.com/session/create', {
      method: 'POST',
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('jwt'),
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: name, description: desc, start: date, district, address })
    })
      .then(response => response.json())
      .then(data => {
        this.props.toggleModal();
      });
  };

  render() {
    const { modal, toggleModal } = this.props;

    return (
      <Modal isOpen={modal} toggle={() => toggleModal(true)}>
        <ModalHeader toggle={() => toggleModal(true)}>Créer une session</ModalHeader>
        <ModalBody>
          <div>
            <FormGroup>
              <Label>Name</Label>
              <Input
                placeholder="Name of the session"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                placeholder="Session description"
                onChange={e => {
                  this.setState({ desc: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Date</Label>
              <Input
                type="date"
                placeholder="Date"
                onChange={e => {
                  this.setState({ date: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
              <Input
                placeholder="Address"
                onChange={e => {
                  this.setState({ address: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>District</Label>
              <Input
                type="number"
                placeholder="District"
                onChange={e => {
                  this.setState({ district: e.target.value });
                }}
              />
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(true)}>Cancel</Button>
          <Button color="success" onClick={this.createSession}>
            Save Session
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalSession.propTypes = {
  newSession: PropTypes.bool.isRequired,
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  session: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string
  }).isRequired
};

export default ModalSession;
