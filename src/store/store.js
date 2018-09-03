import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/root-reducer';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;