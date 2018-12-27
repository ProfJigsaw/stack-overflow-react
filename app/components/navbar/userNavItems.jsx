import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavToggle from './navToggle';

const UserNav = ({ logOut }) => {
  return (
    <div>
      <nav className="navbar-items">
        <ul>
          <li className="nav-item suppl">
            <Link className="link nav-link" to="/">
              <i className="fas fa-home" />
                Home
            </Link>
          </li>
          <li className="nav-item suppl">
            <Link className="link nav-link" to="/questions">
              <i className="fas fa-book" />
              Questions
            </Link>
          </li>
          <li className="nav-item suppl">
            <i className="fas fa-tags" />
              Tags
          </li>
          <li className="nav-item suppl">
            <i className="fas fa-users" />
              Users
          </li>
          <li className="nav-item">
            <i className="fas fa-user-circle" />
            <Link className="link nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <span className="link nav-link" onClick={logOut}>Logout</span>
          </li>
        </ul>
      </nav>
      <NavToggle />
    </div>
  );
};

UserNav.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default UserNav;
