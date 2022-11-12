import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, id } = props;
  const { title, author, category } = book;
  const { deleteBookProp } = props;

  return (
    <li className="book-item">
      <div className="bookdetails flex-col">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="book-buttons flex-row">
          <li className="book-button"><button className="btn-book" type="button">Comments</button></li>
          <li className="book-button">
            <button className="btn-book" type="button" onClick={() => deleteBookProp(id)}>
              Delete
            </button>
          </li>
          <li className="book-button"><button className="btn-book" type="button">Edit</button></li>
        </ul>
      </div>
      <div className="cirPro flex-row">
        <div className="oval">X</div>
        <div className="progress-container">
          <p className="perc">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress">
        <p className="chap-1">CURRENT CHAPTER</p>
        <p className="chap-2">Chaper 17</p>
        <button className="btn-chapter" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  deleteBookProp: PropTypes.func.isRequired,
};
