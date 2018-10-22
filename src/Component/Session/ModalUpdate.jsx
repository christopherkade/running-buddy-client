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
import { FaCalendarAlt, FaUserAlt, FaPlus } from 'react-icons/fa';

class ModalSession extends Component {
  constructor(props) {
    super(props);
    this.state = { desc: '', name: '', date: new Date() };
  }

  render() {
    const { modal, toggleModal, session, newSession } = this.props;
    if (session) {
      const { desc, name, date } = this.state;
    }

    return (
      <Modal isOpen={modal} toggle={() => toggleModal(true)}>
        <ModalHeader toggle={() => toggleModal(true)}>Créer une session</ModalHeader>
        <ModalBody>
          <div>
            <FormGroup>
              <Label>Name</Label>
              <Input placeholder="Name of the session" />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                placeholder="Session description"
              />
            </FormGroup>
            <FormGroup>
              <Label>Date</Label>
              <Input type="date" placeholder="Date" />
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(true)}>Cancel</Button>
          <Button color="success" onClick={() => toggleModal(true)}>
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
