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
      <div className="row">
        <div className="col">Session description goes here</div>
        <div className="col col-6 dateCol">
          <div className="containerFooter">
            <div className="date modalDate">
              <Input disabled value={`0${session.id}/10/2018`} />
              <div className="calendar modalCalendar">
                <FaCalendarAlt />
              </div>
            </div>
            <div />
          </div>
        </div>
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
