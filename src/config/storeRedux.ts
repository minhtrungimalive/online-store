import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const store = () => {
  const middleware = applyMiddleware(...middleWares);
  return createStore(rootReducer, middleware);
};

export { sagaMiddleware, store };
