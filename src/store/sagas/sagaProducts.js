import { takeLatest, put, call, all } from 'redux-saga/effects';

import { Creators as productCreators, Types as productTypes } from '../ducks/products';

import { getAllProductsServices, getSingleProductsServices } from '../services/productService';

function* getAllProductsRequest() {
  try {
    const response = yield call(getAllProductsServices);
    yield put(productCreators.getAllProductsSuccess(response));
  } catch (error) {
    console.error('getAllProductsRequest', error);
  }
}

function* getSingleProductsRequest({ id }) {
  try {
    const response = yield call(getSingleProductsServices, id);
    yield put(productCreators.getSingleProductsSuccess(response.data));
  } catch (error) {
    console.error('getSingleProductsRequest', error);
  }
}

function* sagaProducts() {
  return yield all([
    takeLatest(productTypes.GET_ALL_PRODUCTS_REQUEST, getAllProductsRequest),
    takeLatest(productTypes.GET_SINGLE_PRODUCTS_REQUEST, getSingleProductsRequest),
  ]);
}

export default sagaProducts;
