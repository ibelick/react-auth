import React from 'react';
import PropTypes from 'prop-types'

const Dashboard = ({ secretData }) => (
  <div className="centerh centerv wrapper-auth">
    <div className="wrapper-dashboard">
      <p>You should get access to dis page only after authentication</p>
      {secretData && <p style={{ fontSize: '16px', color: 'red' }}>{secretData}</p>}
    </div>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
