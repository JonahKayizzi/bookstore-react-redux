import types from '../types/types';

const initialState = {
  categories: 'Click to see status',
};

export const checkCategoryStatus = () => ({ type: types.STATUS_CHECKED });

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.STATUS_CHECKED:
      return { ...state, categories: 'Under Construction' };
    default:
      return state;
  }
}
