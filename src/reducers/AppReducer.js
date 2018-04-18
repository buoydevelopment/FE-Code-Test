import { CHANGE_APP_PROPS, LOAD_DETAILS } from '../actions/ActionTypes';

const INITIAL_STATE = {
  loading: false,
  loadDetails: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_APP_PROPS:
      return { ...state, loading: action.props }
    case LOAD_DETAILS:
      return { ...state, loadDetails: action.props }
    default:
      return state;
  }
};
