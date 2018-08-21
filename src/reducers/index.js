const initialState = {};
const AppReducers = (state = initialState, action) => {
  switch (action.type) {
//home
    case 'GET_RECIPE_LIST':
      return (
        Object.assign(
            {},
            state,
            {
              recipe_list: action.data
            }
        )
      );
    case 'GET_RECIPE':
      return (
        Object.assign(
            {},
            state,
            {
              recipe: action.data
            }
        )
      );
    case 'LOAD_DATA_FAILURE':
      return (
        Object.assign(
            {},
            state,
            {
              data_failure: action.data
            }
        )
      );

    default:
      return state;
  }
};

export {AppReducers};
export default AppReducers;
