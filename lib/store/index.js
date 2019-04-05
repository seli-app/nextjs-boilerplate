import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, preloadedState, compose(applyMiddleware(sagaMiddleware)));
  store.sagaTask = sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
