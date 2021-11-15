// @flow

import Immutable from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import helloReducer from '../shared/reducer/hello';

const initStore = (plainPartialState: ?Object): any => {
  const preloadedState = plainPartialState ? {} : undefined;

  if (plainPartialState && plainPartialState.hello) {
    // $FlowFixMe
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello));
  }

  return createStore(combineReducers({ hello: helloReducer }),
    preloadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
