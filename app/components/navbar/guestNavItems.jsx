import React from 'react';
import { Link } from 'react-router-dom';
import NavToggle from './navToggle';

const GuestItems = () => {
  return (
    <div>
      <nav className="navbar-items">
        <ul>
          <li className="nav-item suppl">
            <Link to="/">
              <i className="fas fa-home" />
              Home
            </Link>
          </li>
          <li className="nav-item suppl">
            <Link to="/questions">
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
            <Link className="link nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="link nav-link" to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <NavToggle />
    </div>
  );
};

export default GuestItems;
