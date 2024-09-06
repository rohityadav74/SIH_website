import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="features">
        <Link to="/project-management">Project Research Management</Link>
        <Link to="/ipr-management">IPR Management</Link>
        <Link to="/innovation-support">Innovation Startup Support</Link>
        <Link to="/collaboration-hub">Collaboration Hub</Link>
        <Link to="/analytics">Analytics & Reporting</Link>
      </div>
    </div>
  );
}

export default Dashboard;
