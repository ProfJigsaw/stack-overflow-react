import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from '../navbar/navbar';
import SearchBar from '../searchbar/searchbar';
import icon from '../../../public/assets/logo.ico';

const Header = (props) => {
  const { nav } = props;
  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img id="logo" src={`${icon}`} />
          </Link>
        </div>
        <p className="site-name">StackOverflow-Lite</p>
        {nav && <SearchBar {...props} />}
        {nav && <NavItems />}
      </div>
    </header>
  );
};

export default Header;
