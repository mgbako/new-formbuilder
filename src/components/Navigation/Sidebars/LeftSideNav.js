import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import React from "react";

export const LeftSideNav = props => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link active" href="#">
            <FeatherIcon icon="home" size="24" className="icon" />
            Dashboard <span className="sr-only">(current)</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/teams" className="nav-link active" href="#">
            <FeatherIcon icon="users" size="24" className="icon" />
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/workspaces" className="nav-link active" href="#">
            <FeatherIcon icon="users" size="24" className="icon" />
            Workspaces
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/overview" className="nav-link">
            <FeatherIcon icon="bar-chart-2" size="24" className="icon" />
            Overview
          </Link>
        </li>
        <li className="nav-item">
          <Link to="forms" className="nav-link">
            <FeatherIcon icon="file-text" size="24" className="icon" />
            Forms
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FeatherIcon icon="file-text" size="24" className="icon" />
            Templates
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
