import actions from './actions';

const initState = {
  cocktailList: [],
  cocktailSingle: {}
};

export default function cocktailReducer(state = initState, action) {
  switch (action.type) {
  case actions.COCKTAIL_LIST_SUCCESS:
    return { cocktailList: action.payload };
  case actions.COCKTAIL_DETAILS_SUCCESS:
    return { cocktailSingle: action.payload };
  default:
    return state;  
  }
}