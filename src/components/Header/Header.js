import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Ready to read?</h1>
    <SearchForm />
  </header>
);
export default Header;
