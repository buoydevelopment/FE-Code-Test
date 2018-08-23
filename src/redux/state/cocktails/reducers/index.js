import {
  FETCH_COCKTAIL,
  FETCH_COCKTAIL_FAILURE,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_FAILURE,
  FETCH_COCKTAILS_SUCCESS
} from 'redux/state/cocktails/constants';

const initialState = {
  data: {
    drinks: []
  },
  error: '',
  isLoading: false,
  isLoaded: false
};

const filterPropsByPrefix = (obj, prefix) => {
  return Object.entries(obj)
    .filter(entry => entry[0].startsWith(prefix) && entry[1] && entry[1].trim().length)
    .reduce((item, key) => {
      item[key[0].replace(prefix, '')] = obj[key[0]];
      return item;
    }, {});
};

const getMeasures = (cocktail) => {
  return filterPropsByPrefix(cocktail, 'strMeasure');
};

const getIngredients = (cocktail) => {
  return filterPropsByPrefix(cocktail, 'strIngredient');
};

const getIngredientsList = (cocktail) => {
  const measures = getMeasures(cocktail);
  const ingredients = getIngredients(cocktail);
  return Object.keys(measures).map((key) => {
    return { measure: measures[key], ingredient: ingredients[key], id: key };
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAILS:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };

    case FETCH_COCKTAILS_SUCCESS:
      return {
        ...state,
        data: {
          drinks: action.response.drinks.map(drink => (
            { id: drink.idDrink, name: drink.strDrink, thumbUrl: drink.strDrinkThumb, ingredients: [] }
          ))
        },
        error: '',
        isLoading: false,
        isLoaded: true
      };
    case FETCH_COCKTAILS_FAILURE:
      return {
        ...state,
        data: {},
        error: action.error,
        isLoading: false,
        isLoaded: false
      };
    case FETCH_COCKTAIL:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };

    case FETCH_COCKTAIL_SUCCESS:

      const newDrink = action.response.drinks[0];
      const ingredients = getIngredientsList(newDrink);

      let drinks = [];

      state.data.drinks.forEach(function(drink) {
        if (drink.id === newDrink.idDrink) {
          drinks.push({
            ...drink,
            ingredients: ingredients,
            instructions: newDrink.strInstructions
          });
        } else {
          drinks.push({ ...drink });
        }
      });

      if (!drinks.find(d => d.id === newDrink.idDrink)) {
        drinks.push(
          {
            id: newDrink.idDrink,
            name: newDrink.strDrink,
            thumbUrl: newDrink.strDrinkThumb,
            ingredients: ingredients,
            instructions: newDrink.strInstructions
          }
        );
      }

      return {
        ...state,
        data: {
          drinks: drinks
        },
        error: '',
        isLoading: false,
        isLoaded: true
      };
    case FETCH_COCKTAIL_FAILURE:
      return {
        ...state,
        data: {},
        error: action.error,
        isLoading: false,
        isLoaded: false
      };
    default:
      return state;
  }
};
