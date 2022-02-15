import { all } from 'redux-saga/effects';
import sagaProducts from './sagaProducts';

const sagas = [sagaProducts];

export { sagas };

export default function* rootSaga() {
  yield all([sagaProducts()]);
}
