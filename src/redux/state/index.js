import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cocktails from 'redux/state/cocktails/reducers/index';

const rootReducer = combineReducers({
  routing: routerReducer,
  cocktails
});

export default rootReducer;
