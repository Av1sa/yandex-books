import React, { useState } from 'react';
import './SearchForm.css';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../store/actions';

function SearchForm() {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    dispatch({ type: ACTIONS.HIDE_FOUND });
    dispatch({ type: ACTIONS.SET_NOTHING_FOUND, payload: '' });
    if (keyword) {
      dispatch({ type: ACTIONS.START_PRELOADER });
      bookApi
        .getBooks(keyword)
        .then((res) => {
          dispatch({ type: ACTIONS.STOP_PRELOADER });
          if (res.numFound === 0) {
            dispatch({
              type: ACTIONS.SET_NOTHING_FOUND,
              payload: 'no-results',
            });
          } else {
            dispatch({ type: ACTIONS.SHOW_FOUND });
            dispatch({ type: ACTIONS.SEARCH_BOOKS, payload: res.docs });
          }
        })
        .catch(() => {
          dispatch({ type: ACTIONS.STOP_PRELOADER });
          dispatch({
            type: ACTIONS.SET_NOTHING_FOUND,
            payload: 'error',
          });
        });
    }
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
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
