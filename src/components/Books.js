import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { addBook, deleteBook } from '../redux/books/books';

const Books = () => {
  const availableBooks = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const delBook = (idToDel) => {
    dispatch(deleteBook({ id: idToDel }));
  };

  return (
    <div className="container">
      <ul>
        {availableBooks.bookList.map((book) => (
          <Book key={book.id} book={book} deleteBookProp={delBook} />
        ))}
      </ul>
      <InputBook addBookProp={addBookItem} />
    </div>
  );
};

export default Books;
