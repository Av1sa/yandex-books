import React from 'react';
import './Modal.css';

function Modal() {
  const {
    cover,
    title,
    author_name,
    publish_date,
    publisher,
    isbn,
  } = currentBook;

  const handleClose = () => {};

  return (
    <button
      type="button"
      className={`modal ${isOpen && 'modal_is-open'}`}
      onClick={handleClose}
    >
      <div className="modal__container">
        <img src={cover} alt={title} className="modal__image" />
        <div className="modal__info">
          <h2 className="modal__title">{title || 'n/a'}</h2>
          <p className="modal__text">
            <span className="modal__text-span">Author: </span>
            {author_name || 'n/a'}
          </p>
          <p className="modal__text">
            <span className="modal__text-span">First published: </span>
            {publish_date ? publish_date[0] : 'n/a'}
          </p>
          <p className="modal__text">
            <span className="modal__text-span">Publisher: </span>
            {publisher ? publisher[0] : 'n/a'}
          </p>
          <p className="modal__text">
            <span className="modal__text-span">ISBN: </span>
            {isbn ? isbn[0] : 'n/a'}
          </p>
        </div>
      </div>
    </button>
  );
}

export default Modal;
