import React from 'react';
import './BookList.css';
import Book from '../Book/Book';

function BookList() {
  return (
    <ul className="books">
      {books.map((book) => (
        <Book book={book} key={book.key} />
      ))}
    </ul>
  );
}

export default BookList;
