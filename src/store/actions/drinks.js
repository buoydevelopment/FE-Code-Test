import { UPDATE_DRINKS, SELECT_DRINK } from './actionTypes';
import store from '../store';

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
                updateDetailFor(parsedRes.drinks, dispatch)                
            } else {
                console.log("There are no drinks");
                dispatch(updateDrinks([]))
            }
        }).catch(err => {
            console.log(err);
            // TODO: maybe dispatch(errorLoadingDrinks()) ??
        });
    }
};

const promiseForDrinkDetail = (drinkId) => {
    let url = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+drinkId
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}

const buildIngredientsFor = drink => {
    drink.ingredients = []

    for (let index = 1; index <= 15; index++) {
        let key = "strIngredient"+index
        if (drink[key] !== undefined && 
            drink[key] !== "" &&
            drink[key] !== null) {
            drink.ingredients.push(drink[key])
        }
    }
}
const buildMeasuresFor = drink => {
    drink.measures = []

    for (let index = 1; index <= 15; index++) {
        let key = "strMeasure"+index
        if (drink[key] !== undefined && 
            drink[key] !== "" &&
            drink[key] !== null) {
            drink.measures.push(drink[key])
        }
    }
}

const updateDetailFor = (drinks, dispatch) => {
    let  promises = drinks.map((drink) => {
        return promiseForDrinkDetail(drink.idDrink) 
    })

    Promise.all(promises).then(function(values) {
        let dinks = values.map((item) => {
            let drink = item.drinks[0]
            buildIngredientsFor(drink)
            buildMeasuresFor(drink)
            return drink
        })
        dispatch(updateDrinks(dinks))
      });
}

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