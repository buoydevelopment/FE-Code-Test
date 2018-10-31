import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('string'),
    thumb: DS.attr('string'),
    ingredients: DS.attr('array'),
    strInstructions: DS.attr('string'),

    ingredientCounter: DS.attr('number'),
    ingredientToShowCounter: function () {
        return (this.get('ingredientCounter') - 2) > 0 ? this.get('ingredientCounter') - 2 : 0;
    }.property('ingredientCounter')
});
