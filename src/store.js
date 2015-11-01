import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function createConfiguredStore(reducer, initState) {
  return createStoreWithMiddleware(reducer, initState);
}