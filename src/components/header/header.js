import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <NavLink  to="/">TeamTasker</NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/task-list" activeClassName="active">Task List</NavLink>
          </li>
          {/* <li>
            <NavLink to="/task-details" activeClassName="active">Task Details</NavLink>
          </li> */}
          <li>
            <NavLink to="/user-profile" activeClassName="active">User Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
