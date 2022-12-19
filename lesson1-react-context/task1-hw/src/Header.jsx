import React from 'react';
import './index.scss';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="header">
      <UserMenu />
    </header>
  );
};

export default Header;
