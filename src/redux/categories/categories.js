import types from '../types/types';

const initialState = {
  categories: '',
};

export const checkCategoryStatus = () => ({ type: types.STATUS_CHECKED });

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
}
