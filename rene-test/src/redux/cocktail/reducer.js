import actions from './actions';

const initState = {
  cocktailList: []
};

export default function cocktailReducer(state = initState, action) {
  switch (action.type) {
  case actions.COCKTAIL_LIST_SUCCESS:
    return { cocktailList: action.payload };
  default:
    return state;  
  }
}