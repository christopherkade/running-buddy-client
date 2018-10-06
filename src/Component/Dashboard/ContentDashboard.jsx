import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../Action/FetchSession';
import DashboardCards from './DashboardCards';

class ContentDashboard extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('http://599167402df2f40011e4929a.mockapi.io/items'); // change for the api server
  }

  render() {
    const { hasErrored, isLoading, items } = this.props;
    if (hasErrored) {
      return <p>un probleme est survenu, réessayer dans quelques instants</p>;
    }
    if (isLoading) {
      return <p>Chargement…</p>;
    }
    return (
      <div className="containerCards">
        {items.map(item => (
          <DashboardCards key={item.id} session={item} />
          // <li key={item.id}>{item.label}</li>
        ))}
      </div>
    );
  }
}

ContentDashboard.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
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
