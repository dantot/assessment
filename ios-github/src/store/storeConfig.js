import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import uiReducer from './reducers/ui';
import issuesReducer from './reducers/issues';

let composeEnhancers = compose;
const middlewares = [];

const rootReducer = combineReducers({
  ui: uiReducer,
  isu: issuesReducer
});

if (__DEV__) {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

middlewares.push(thunk);

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
