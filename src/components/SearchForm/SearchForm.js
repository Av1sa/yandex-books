import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Enter something"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="search__button"
        disabled={keyword === ''}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
