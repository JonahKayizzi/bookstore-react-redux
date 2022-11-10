import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, id } = props;
  const { title, author } = book;
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
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  deleteBookProp: PropTypes.func.isRequired,
};
