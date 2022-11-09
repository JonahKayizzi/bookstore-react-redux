import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { checkCategoryStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryStatus = useSelector((state) => state.category, shallowEqual);
  const dispatch = useDispatch();
  const checkStatus = () => {
    dispatch(checkCategoryStatus());
  };
  return (
    <>
      <p>{categoryStatus.categories}</p>
      <button type="button" onClick={checkStatus}>
        Check Status
      </button>
    </>
  );
};

export default Categories;
