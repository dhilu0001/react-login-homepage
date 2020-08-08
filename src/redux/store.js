import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root-reducer';
import INITIAL_STATE from './initialState';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer,INITIAL_STATE, applyMiddleware(...middlewares));

export default store;
