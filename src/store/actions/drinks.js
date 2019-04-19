import { UPDATE_DRINKS, SELECT_DRINK, LOADING_DRINKS } from './actionTypes';
import store from '../store';

const promiseForDrinkDetail = (drinkId) => {
    return promiseFor("http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+drinkId)
}

const promiseFor = (url) => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()
    ).catch(err => {
        console.log(err);
    });

}

const buildArrayFor = (drink, fieldPrefix) => {
    let array = []

    for (let index = 1; index <= 15; index++) {
        const key = fieldPrefix+index
        if (drink[key]) {
            array.push(drink[key])
        }
    }
    return array;
}

const updateDetailFor = (drinks, dispatch) => {
    let promises = drinks.map((drink) => {
        return promiseForDrinkDetail(drink.idDrink) 
    })

    Promise.all(promises).then(function(values) {
        let dinks = values.map((item) => {
            let drink = item.drinks[0]
            drink.ingredients = buildArrayFor(drink, "strIngredient")
            drink.measures = buildArrayFor(drink, "strMeasure")
            return drink
        })
        dispatch(updateDrinks(dinks))
      });
}

export const getDrinks = () => {

    return dispatch => {
        dispatch(loadingDrinks(true))
        
        promiseFor("http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
        .then(parsedRes => {
            if (parsedRes.drinks) {
                updateDetailFor(parsedRes.drinks, dispatch)                
            } else {
                console.log("There are no drinks");
                dispatch(updateDrinks([]))
            }
        })
    }

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
