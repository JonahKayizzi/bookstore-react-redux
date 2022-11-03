import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => {
  const getInitialBooks = () => {
    const initialBooks = [];
    return initialBooks;
  };
  const [books, setBooks] = useState(getInitialBooks());

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const delBook = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };

  return (

    <div className="container">
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            deleteBookProp={delBook}
          />
        ))}
      </ul>
      <InputBook addBookProp={addBookItem} />
    </div>
  );
};

export default Books;
