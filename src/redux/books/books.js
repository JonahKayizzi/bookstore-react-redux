/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/U6gF2N1pkuPRjLdIu34R/books';

const initialState = {
  isLoading: true,
  bookList: {},
};

export const getBooks = createAsyncThunk(
  types.BOOKS_FETCHED,
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addBook = createAsyncThunk(
  types.BOOK_ADDED,
  async (payload, thunkAPI) => {
    await axios.post(url, payload);
    return thunkAPI.dispatch(getBooks());
  },
);

export const deleteBook = createAsyncThunk(
  types.BOOK_DELETED,
  async (payload, thunkAPI) => {
    await axios.delete(`${url}/${payload}`);
    return thunkAPI.dispatch(getBooks());
  },
);

const bookSlice = createSlice({
  name: 'bookSl',
  initialState,
  reducers: {
    BookAdd: (state, action) => ({ ...state, bookList: [...state.bookList, action.bookDetail] }),
    BookDelete: (state, action) => ({
      ...state,
      bookList: [
        ...state.bookList.filter((book) => book.id !== action.index.id),
      ],
    }),
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookList = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default bookSlice.reducer;
