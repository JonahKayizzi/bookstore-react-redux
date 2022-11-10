import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { getBooks, addBook, deleteBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.bookSl);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const addBookItem = (title, author) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  const delBook = (idToDel) => {
    dispatch(deleteBook(idToDel));
  };

  return (
    <div className="container">
      <ul>
        {Object.keys(books.bookList).map((book) => (
          <Book key={book} id={book} book={books.bookList[book][0]} deleteBookProp={delBook} />
        ))}
      </ul>
      <InputBook addBookProp={addBookItem} />
    </div>
  );
};

export default Books;
