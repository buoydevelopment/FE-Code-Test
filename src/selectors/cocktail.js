export const cocktailListSelector = (state) => state.getIn([ 'app', 'cocktail', 'list' ]);
export const cocktailDetailSelector = (state) => state.getIn([ 'app', 'cocktail', 'detail' ]);
