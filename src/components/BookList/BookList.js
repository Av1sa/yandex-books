import React from 'react';
import './BookList.css';
import { useSelector } from 'react-redux';
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
