import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to the Research and Innovation Platform</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin-panel">Admin Panel</Link>
      </nav>
    </div>
  );
}

export default Homepage;
