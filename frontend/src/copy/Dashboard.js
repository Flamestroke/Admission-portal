import React from 'react';
import './Dashboard.css';

const Dashboard = () => {

  const statuses = [
    { id: 1, service: 'Basic Details', status: 'Complete' },
    { id: 2, service: 'Education Details', status: 'Partially Complete' },
    { id: 3, service: 'Upload', status: 'Incomplete' },
  ];

  const getStatusBarClass = (status) => {
    switch (status) {
      case 'Complete':
        return 'status-complete';
      case 'Partially Complete':
        return 'status-partial';
      case 'Incomplete':
        return 'status-incomplete';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <div className="table-container">
        <h1>Dashboard</h1>
        <hr/>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map(status => (
              <tr key={status.id}>
                <td>{status.id}</td>
                <td>{status.service}</td>
                <td>
                  {status.status}
                  <div className={`status-bar ${getStatusBarClass(status.status)}`}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
