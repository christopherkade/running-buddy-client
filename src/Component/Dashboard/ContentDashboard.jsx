import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../Action/Fetch';
import DashboardCards from './DashboardCards';

class ContentDashboard extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('https://dry-ocean-92944.herokuapp.com/session/district/1'); // change for the api server
  }

  componentDidUpdate(prevProps) {
    const { fetchData, district } = this.props;
    if (district !== prevProps.district) {
      fetchData('https://dry-ocean-92944.herokuapp.com/session/district/' + district); // change for the api server
    }
  }

  render() {
    const { hasErrored, isLoading, items, update } = this.props;
    if (update) {
    }
    if (hasErrored) {
      return <p>un probleme est survenu, réessayer dans quelques instants</p>;
    }
    if (isLoading) {
      return <p>Chargement…</p>;
    }
    return (
      <div className="containerCards">
        {update
          ? items.map(item => {
              return item.ownerId === parseInt(localStorage.getItem('id')) ? (
                <DashboardCards key={item.id} session={item} update={update} />
              ) : null;
            })
          : items.map(item => <DashboardCards key={item.id} session={item} update={update} />)}
      </div>
    );
  }
}

ContentDashboard.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  update: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  district: state.district,
  items: state.items,
  hasErrored: state.error,
  isLoading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDashboard);
