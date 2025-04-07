import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboardOverview = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalClubs: 0,
    pendingRegistrations: 0,
    approvedMembers: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:3000/auth/dashboard-overview")
      .then(res => setStats(res.data))
      .catch(err => console.error('Error fetching dashboard stats', err));
  }, []);

  const cardStyle = {
    minHeight: '150px',
    border: '2px solid #dee2e6',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row g-4 ">
        <div className="col-12 col-lg-6">
          <div className="p-4 text-center" style={cardStyle}>
            <h5 className="text-primary">Total Users</h5>
            <h1>{stats.totalUsers}</h1>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="p-4 text-center" style={cardStyle}>
            <h5 className="text-success">Total Clubs</h5>
            <h1>{stats.totalClubs}</h1>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="p-4 text-center" style={cardStyle}>
            <h5 className="text-warning">Pending Registrations</h5>
            <h1>{stats.pendingRegistrations}</h1>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="p-4 text-center" style={cardStyle}>
            <h5 className="text-purple" style={{ color: '#6f42c1' }}>Approved Members</h5>
            <h1>{stats.approvedMembers}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOverview;
