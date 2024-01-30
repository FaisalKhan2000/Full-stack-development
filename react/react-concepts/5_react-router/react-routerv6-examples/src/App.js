import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import Post from "./components/Post";
import DashboardOverview from "./components/DashboardOverview";
import DashboardSettings from "./components/DashboardSettings";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          {/* Link to the Posts component */}
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<UserProfile />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<DashboardOverview />} />
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        {/* Route for Posts */}
        <Route path="/posts" element={<Posts />}>
          {/* Dynamic routes for individual posts */}
          <Route path=":id" element={<Post />} />
        </Route>

        {/* Default route (redirects to Home) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
