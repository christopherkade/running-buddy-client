import React, { Component } from 'react';
import './Session.css';
import { FaPlus } from 'react-icons/fa';
import ContentDashboard from '../Dashboard/ContentDashboard';
import ModalUpdate from './ModalUpdate';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, newSession: true };
  }

  toggleModal = newSession => {
    const { modal } = this.state;
    console.log(newSession);
    this.setState({ newSession, modal: !modal });
  };

  render() {
    const { modal, newSession, session } = this.state;
    return (
      <div className="session">
        <ContentDashboard />
        <button onClick={() => this.toggleModal(true)} className="floatingButton">
          <FaPlus />
        </button>
        <ModalUpdate
          toggleModal={this.toggleModal}
          modal={modal}
          newSession={newSession}
          session={null}
        />
      </div>
    );
  }
}

export default Session;
