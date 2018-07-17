const initialState = {};
const AppReducers = (state = initialState, action) => {
  switch (action.type) {
//home
    case 'SET_TEST':            
      return (
        Object.assign(
            {}, 
            state, 
            {
              test: action.data
            }
        )
      );

    default:
      return state;
  }
};

export {AppReducers};
export default AppReducers;