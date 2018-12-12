import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from '../navbar/navbar.jsx';
import SearchBar from '../searchbar/searchbar.jsx';

export default ({ nav }) => {
    return (
        <header>
            <div className="navbar">
                <div className="navbar-logo">
                    <Link to='/'>
                        <img id="logo" src="public/assets/logo.ico" />
                    </Link>
                </div>
                <p className="site-name">StackOverflow-Lite</p>
                {nav && <SearchBar />}
                {nav && <NavItems />}
            </div>
        </header>
    );  
}
