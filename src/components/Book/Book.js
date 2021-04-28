import React, { useEffect, useState } from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';
import { BASE_URL_COVER_API } from '../../utils/const';
import noImage from '../../images/no_image_available.jpeg';
import ACTIONS from '../../store/actions';

function Book({ book }) {
  const {
    author_name, title, isbn, cover_i,
  } = book;
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (cover_i) {
      setImgSrc(`${BASE_URL_COVER_API}/id/${cover_i}-L.jpg?default=false`);
    } else if (isbn && isbn[0]) {
      setImgSrc(`${BASE_URL_COVER_API}/isbn/${isbn[0]}-L.jpg?default=false`);
    } else {
      setImgSrc(noImage);
    }
  }, []);

  const handleBookClick = () => {
    dispatch({
      type: ACTIONS.CLICK_BOOK,
      payload: { ...book, cover: imgSrc },
    });
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const handleImageError = () => {
    setImgSrc(noImage);
  };

  return (
    <button type="button" className="book" onClick={handleBookClick}>
      <img
        src={imgSrc}
        alt={title}
        className="book__image"
        onError={handleImageError}
      />
      <div className="book__info">
        <p className="book__author">{author_name}</p>
        <h3 className="book__title">{title}</h3>
      </div>
    </button>
  );
}

export default Book;
