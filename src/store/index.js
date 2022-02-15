import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './ducks';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  timeout: null,
  debounce: 100,
  stateReconciler: autoMergeLevel2,
  whitelist: ['cart'],
  // blacklist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({ ...rootReducer });
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware)));

store.sagaTask = sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store, persistor };
