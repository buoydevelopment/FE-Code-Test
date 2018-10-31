import DS from 'ember-data';
import { run } from '@ember/runloop';
import RSVP from 'rsvp';
import $ from 'jquery';

export default DS.RESTAdapter.extend({
    
    host: `https://www.thecocktaildb.com`,
    namespaces: `api/json/v1/1`,
    primaryKey: 'idDrink',

    findAll()  {
        const url = `${this.host}/${this.namespaces}/filter.php?g=Cocktail_glass`
        return new RSVP.Promise(function (resolve) {
            $.ajax({
                url: url
            }).then(data => {

                let rows = [];
                data.drinks.forEach(drink => {
                    let d = {
                        id: drink.idDrink,
                        name: drink.strDrink,
                        thumb: drink.strDrinkThumb
                    }
                    rows.push(d);                 
                });
                let dataResponse = { 'drinks': rows }
                run(null, resolve, dataResponse);
            });
        });
    },
    findRecord(model, r ,idDrink) {
        const url = `${this.host}/${this.namespaces}/lookup.php?i=${idDrink}`
        return new RSVP.Promise(function (resolve) {
            $.ajax({
                url: url
            }).then(data => {
                const d = data.drinks[0];
                let ingredients = [];
                let ingredientCounter = 0;

                for (let i = 1; i <= 15; i++) {
                    const details = `strIngredient${i}`;
                    const measure = `strMeasure${i}`;

                    if (d[details] != '' && d[details] != null) {                        
                        let ing = {
                            strIngredient: d[details],
                            strMeasure: d[measure],
                            show: (ingredientCounter < 2) ? true : false,
                        };                    
                        ingredients.push(ing);
                        ingredientCounter++;
                    }
                }
                
                let dataResponse = {
                    'drink-attribute': 
                        {
                            id: d.idDrink,
                            name: d.strDrink,
                            thumb: d.strDrinkThumb,
                            strInstructions: d.strInstructions,
                            ingredients: ingredients,
                            ingredientCounter: ingredientCounter,
                        }
                    
                };
                run(null, resolve, dataResponse);
            });
        });
    },
});
