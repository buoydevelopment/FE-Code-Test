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
                let drink = {};
                let drink_counter = 0;

                for (let i = 1; i <= 15; i++) {
                    //const element = array[i];
                    const details = `strIngredient${i}`;
                    const measure = `strMeasure${i}`;
                    drink[details] = d[details];
                    drink[measure] = d[measure];
                    if (d[details] != '' && d[details] != null)
                    drink_counter++;
                }
                drink.id = d.idDrink;
                drink.name = d.strDrink;
                drink.thumb = d.strDrinkThumb;
                drink.strInstructions = d.strInstructions;
                drink.drinkCounter = drink_counter;
                let dataResponse = { 'drink-attribute': drink } 
                run(null, resolve, dataResponse);
            });
        });
    },
});
