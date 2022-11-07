import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;
  const { deleteBookProp } = props;

  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => deleteBookProp(id)}>
        Delete
      </button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.isRequired,
  deleteBookProp: PropTypes.func.isRequired,
};
