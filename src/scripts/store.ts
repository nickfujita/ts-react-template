import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
const createLogger = require('redux-logger');
import rootReducer from './reducers';

export default function configureStore(initialState?) {

  const logger = createLogger();

  const middleware = [
    thunk,
    routerMiddleware(browserHistory),
    logger,
  ];

  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
};
