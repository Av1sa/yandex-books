import React from 'react';
import { useSelector } from 'react-redux';
import './BookList.css';
import Book from '../Book/Book';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <ul className="books">
      {books.map((book) => (
        <Book book={book} key={book.key} />
      ))}
    </ul>
  );
}

export default BookList;
