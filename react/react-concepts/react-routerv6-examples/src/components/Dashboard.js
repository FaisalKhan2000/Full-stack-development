import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="overview">Overview</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Outlet renders the child components based on the nested routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
