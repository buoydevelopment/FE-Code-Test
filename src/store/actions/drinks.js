import { UPDATE_DRINKS, SELECT_DRINK, LOADING_DRINKS } from './actionTypes';
import store from '../store';
import drinksAPI from '../../networking/drinksAPI';

export const getDrinks = () => {

    return dispatch => {
        dispatch(loadingDrinks(true));
        
        drinksAPI.getDrinks().then(drinks => {
            if (drinks) {
                dispatch(updateDrinks(drinks))
            } else {
                console.log("There are no drinks");
                dispatch(updateDrinks([]))
            }
        }).catch(err => {
            console.log(err)
            dispatch(updateDrinks([]))
        });
    };
};

export const getDrinkDetail = (drinkId) => {
    // TODO: I should not access the state here, Drinks should be stored in a global cache, something like realm
    const state = store.getState();
    let drink = state.drinks.items.find((item) => {
        return item.idDrink == drinkId
    })
    
    // TODO: If doesn't exist in the state I should call API

    return {
        type: SELECT_DRINK,
        drink: drink
    };
};

export const updateDrinks = (drinks) => {
    return {
        type: UPDATE_DRINKS,
        drinks: drinks
    };
};

export const loadingDrinks = (isLoading) => {
    return {
        type: LOADING_DRINKS,
        isLoading: isLoading
    };
};
