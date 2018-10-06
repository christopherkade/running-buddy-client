import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FaCalendarAlt, FaUserAlt, FaPlus } from 'react-icons/fa';

/* remove for api */
const members = ['John', 'Thomas', 'Marie'];

const ModalSession = ({ session, toggleModal, modal }) => (
  <Modal isOpen={modal} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>{session.label}</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalBody>
      <div className="containerFooter">
        <div className="date">
          <Input disabled value={`0${session.id}/10/2018`} />
          <div className="calendar">
            <FaCalendarAlt />
          </div>
        </div>
        <div />
      </div>
    </ModalBody>
    <ModalFooter>
      {members.map(member => (
        <div key={`member-${member}`} className="badgeModal">
          <FaUserAlt />
        </div>
      ))}
      <Button className="badgeModalButton" onClick={toggleModal}>
        <FaPlus />
      </Button>
    </ModalFooter>
  </Modal>
);

ModalSession.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string
  }).isRequired,
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ModalSession;
