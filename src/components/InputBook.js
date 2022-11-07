import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputBook = (props) => {
  const { addBookProp } = props;

  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim()) {
      addBookProp(inputText.title, inputText.author);
      setInputText({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Book..."
        value={inputText.title}
        onChange={onChange}
        name="title"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add Author..."
        value={inputText.author}
        onChange={onChange}
        name="author"
      />
      <button type="submit" className="input-submit">
        Submit
      </button>
    </form>
  );
};

InputBook.propTypes = {
  addBookProp: PropTypes.func.isRequired,
};

export default InputBook;
