import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FaCalendarAlt, FaUserAlt, FaPlus } from 'react-icons/fa';

class ModalSession extends Component {
  constructor(props) {
    super(props);
  }
  deleteSession = () => {
    fetch('http://localhost:3000/session/' + this.props.session.id, {
      method: 'DELETE',
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('jwt'),
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.props.toggleModal();
      });
  };

  addUserToSession = () => {
    fetch('http://localhost:3000/session/join/' + this.props.session.id, {
      method: 'POST',
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('jwt'),
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.props.toggleModal();
      });
  };

  render() {
    const { session, toggleModal, modal, update } = this.props;
    const date = new Date(session.start);
    return (
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{session.title}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col">{session.description}</div>
            <div className="col col-6 dateCol">
              <div className="containerFooter">
                <div className="date modalDate">
                  <Input disabled value={date.toLocaleDateString()} />
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
          {session.runner.map(member => (
            <div key={`member-${member.id}`}>
              <button
                disabled
                type="button"
                className="btn btn-secondary badgeModal"
                title={member.username}
              >
                <FaUserAlt />
              </button>
            </div>
          ))}
          {update ? (
            <Button color="danger" onClick={this.deleteSession}>
              delete Session
            </Button>
          ) : (
            <Button
              className="badgeModalButton"
              onClick={this.addUserToSession}
              disabled={
                !!session.runner.filter(runner => runner.email === localStorage.getItem('email'))
                  .length
              }
            >
              <FaPlus />
            </Button>
          )}
        </ModalFooter>
      </Modal>
    );
  }
}

ModalSession.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string
  }).isRequired,
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ModalSession;
