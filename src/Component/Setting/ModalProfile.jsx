import React from 'react';
import PropTypes from 'prop-types';
import './Setting.css';
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

const ModalProfile = ({ toggleModal, modal }) => (
  <Modal isOpen={modal} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>Change your profile</ModalHeader>
    <ModalBody>
      <div>
        <FormGroup>
          <Label>Name</Label>
          <Input placeholder="Your name" />
        </FormGroup>
        <FormGroup>
          <Label>Surname</Label>
          <Input placeholder="Your surname" />
        </FormGroup>
        <FormGroup>
          <Label>New password</Label>
          <Input type="password" placeholder="New password" />
        </FormGroup>
        <FormGroup>
          <Label>Comfirm new password</Label>
          <Input type="password" placeholder="New password" />
        </FormGroup>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggleModal}>Cancel</Button>
      <Button color="success" onClick={toggleModal}>
        Save Profile
      </Button>
    </ModalFooter>
  </Modal>
);

ModalProfile.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ModalProfile;
