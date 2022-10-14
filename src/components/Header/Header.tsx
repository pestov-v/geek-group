import React from 'react';
import './Header.css';
import HeaderTop from './HeaderTop';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
  return (
    <header className="header fixed-top">
      <div className="container m-auto pt-4">
        <HeaderTop />
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
