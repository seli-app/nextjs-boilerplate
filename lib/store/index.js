import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const configureStore = (preloadedState, mockingMethod = null) => {
  const sagaMiddleware = createSagaMiddleware();
  let store;
  if (typeof mockingMethod === 'function') {
    store = mockingMethod([sagaMiddleware])({});
  } else {
    store = createStore(reducers, preloadedState, compose(applyMiddleware(sagaMiddleware)));
  }

  store.sagaTask = sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
