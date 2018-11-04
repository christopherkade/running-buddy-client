import React from 'react';
import './Dashboard.css';
import FilterDistrict from './FilterDistrict';
import ContentDashboard from './ContentDashboard';

const Dashboard = ({ update }) => (
  <div className="dashboard" style={update ? { paddingTop: '0px' } : { paddingTop: '64px' }}>
    <div className="row align-items-center">
      <div className="col">
        <FilterDistrict />
      </div>
    </div>
    <div className="row content">
      <ContentDashboard update={update} />
    </div>
  </div>
);

export default Dashboard;
