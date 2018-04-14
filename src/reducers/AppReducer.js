import { CHANGE_APP_STATE } from '../actions/types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_APP_STATE:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
