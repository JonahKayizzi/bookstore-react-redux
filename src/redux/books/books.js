import types from '../types/types';

const initialState = {
  bookList: [],
};

export const deleteBook = (index) => ({
  type: types.BOOK_DELETED,
  index,
});

export const addBook = (bookDetail) => ({
  type: types.BOOK_ADDED,
  bookDetail,
});

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOOK_ADDED:
      return {
        ...state,
        bookList: [...state.bookList, action.bookDetail],
      };
    case types.BOOK_DELETED:
      return {
        ...state,
        bookList: [
          ...state.bookList.filter((book) => book.id !== action.index.id),
        ],
      };
    default:
      return state;
  }
}
