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
});
