import React, { Component } from 'react';
import './Session.css';
import { FaPlus } from 'react-icons/fa';
import ContentDashboard from '../Dashboard/ContentDashboard';
import ModalUpdate from './ModalUpdate';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggleModal = newSession => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  render() {
    const { modal } = this.state;
    return (
      <div className="session">
        <ContentDashboard update={true} />
        <button onClick={() => this.toggleModal(true)} className="floatingButton">
          <FaPlus />
        </button>
        <ModalUpdate toggleModal={this.toggleModal} modal={modal} />
      </div>
    );
  }
}

export default Session;
