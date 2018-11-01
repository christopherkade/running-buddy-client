import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import { Input } from 'reactstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import ModalSession from './ModalSession';

class DashboardCards extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  render() {
    const { session, update } = this.props;
    const { modal } = this.state;
    return (
      <div className="card" onClick={this.toggleModal}>
        <div className="card-body">
          <h5 className="card-title">{session.label}</h5>
          <div className="cardSeparator" />
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <div className="containerFooter">
            <div className="date">
              <Input disabled value={`0${session.id}/10/2018`} />
              <div className="calendar">
                <FaCalendarAlt />
              </div>
            </div>
            <div className="badgeContainer">
              <div className="badgeCard">1</div>
            </div>
          </div>
        </div>
        <ModalSession
          session={session}
          toggleModal={this.toggleModal}
          modal={modal}
          update={update}
        />
      </div>
    );
  }
}

DashboardCards.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string
  }).isRequired
};

export default DashboardCards;
