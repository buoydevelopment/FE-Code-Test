import { fromJS } from 'immutable';
import * as cocktailActions from '../actions/cocktail';
import { fetchingState } from '../constants';

const initialStats = {
  list: {},
  detail: {}
};

export default (state = fromJS(initialStats), action) => {
  switch (action.type) {
    case cocktailActions.COCKTAIL_LIST_FETCH_START:
      return state.setIn([ 'list', 'state' ], fetchingState.FETCHING);
    case cocktailActions.COCKTAIL_LIST_FETCH_SUCCESS:
      let newState = state.setIn([ 'list', 'state' ], fetchingState.LOADED);
      return newState.setIn([ 'list', 'data' ], fromJS(action.data.drinks || []));
    case cocktailActions.COCKTAIL_LIST_FETCH_ERROR:
      return state.setIn([ 'list', 'state' ], fetchingState.ERROR);

    case cocktailActions.COCKTAIL_FETCH_START:
      return state.setIn([ 'detail', 'state' ], fetchingState.FETCHING);
    case cocktailActions.COCKTAIL_FETCH_SUCCESS:
      newState = state.setIn([ 'detail', 'state' ], fetchingState.LOADED);
      return newState.setIn([ 'detail', 'data', action.cocktailId ], fromJS(action.data.drinks ? action.data.drinks[0] : {}));
    case cocktailActions.COCKTAIL_FETCH_ERROR:
      return state.setIn([ 'detail', 'state' ], fetchingState.ERROR);

    default:
      return state;
  }
};
