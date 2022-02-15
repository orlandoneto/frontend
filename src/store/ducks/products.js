import { createActions, createReducer } from 'reduxsauce';

/* Initial State */
const initialState = {
  productList: [],
  productSingle: [],
};

export const { Types, Creators } = createActions({
  getAllProductsRequest: [],
  getAllProductsSuccess: ['data'],

  getSingleProductsRequest: ['id'],
  getSingleProductsSuccess: ['data'],
});

const getAllProductsSuccess = (state = initialState, { data }) => {
  return { ...state, productList: data };
};

const getSingleProductsSuccess = (state = initialState, { data }) => {
  return { ...state, productSingle: data };
};

const categoriesHandlers = {
  [Types.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess,
  [Types.GET_SINGLE_PRODUCTS_SUCCESS]: getSingleProductsSuccess,
};

export default createReducer(initialState, categoriesHandlers);
