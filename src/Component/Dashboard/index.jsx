import React from 'react';
import './Dashboard.css';
import FilterDistrict from './FilterDistrict';
import ContentDashboard from './ContentDashboard';

const Dashboard = () => (
  <div className="dashboard">
    <div className="row align-items-center">
      <div className="col">
        <FilterDistrict />
      </div>
    </div>
    <div className="row content">
      <ContentDashboard update={false} />
    </div>
  </div>
);

export default Dashboard;
