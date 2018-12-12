import React from 'react';
import { Link } from 'react-router-dom';
import NavToggle from './navToggle.jsx';

export default ({ logOut }) => {
    return (
        <div>
            <nav className="navbar-items">
                <ul>
                <li className="nav-item">
                    <i className="fas fa-user-circle" />
                    <Link className="link nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                <span className="link nav-link" onClick={() => logOut()}>Logout</span>
                </li>
                </ul>
            </nav>
            <NavToggle />
        </div>
    );  
}