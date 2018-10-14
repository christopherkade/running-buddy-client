import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';
import chooseDistrict from '../../Action/Session';
import './Dashboard.css';

const districtCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const FilterDistrict = ({ chooseADistrict }) => (
  <div className="row align-items-center filterDistrictWrapper">
    <div className="col-2 align-self-start filterText">Choose your district :</div>
    <div className="col align-self-start">
      <ButtonGroup>
        {districtCounter.map(e => (
          <Button
            onClick={() => {
              chooseADistrict(e);
            }}
            key={e}
          >
            {e}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  </div>
);

FilterDistrict.propTypes = {
  chooseADistrict: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  chooseADistrict: district => dispatch(chooseDistrict(district))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterDistrict);
