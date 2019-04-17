import { UPDATE_DRINKS, SELECT_DRINK } from './actionTypes';
import store from '../store'; // TODO: I should not import the store

export const getDrinks = () => {
    return dispatch => {
        let url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()
        ).then(parsedRes => {
            if (parsedRes.drinks) {
                dispatch(updateDrinks(parsedRes.drinks))
            } else {
                console.log("There are no drinks");
                dispatch(updateDrinks([]))
            }
        }).catch(err => {
            console.log(err);
            alert("There  was an error getting the list of drinks"); // TODO: Hacer algo con esto!!
        });
    }
};

export const getDrinkDetail = (drinkId) => {
    // TODO: I should not access the state here, Drinks should be stored in a global cache, something like realm
    const state = store.getState();
    let drink = state.drinks.items.find((item) => {
        return item.idDrink == drinkId
    })
    
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