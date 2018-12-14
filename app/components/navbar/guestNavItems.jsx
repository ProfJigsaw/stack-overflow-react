import React from 'react';
import { Link } from 'react-router-dom';
import NavToggle from './navToggle';

const GuestItems = () => {
  return (
    <div>
      <nav className="navbar-items">
        <ul>
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
