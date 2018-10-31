import DS from 'ember-data';

export default DS.Model.extend({

    strInstructions: DS.attr('string'),
    strIngredient1:  DS.attr('string'),
    strIngredient2:  DS.attr('string'),
    strIngredient3:  DS.attr('string'),
    strIngredient4:  DS.attr('string'),
    strIngredient5:  DS.attr('string'),
    strIngredient6:  DS.attr('string'),
    strIngredient7:  DS.attr('string'),
    strIngredient8:  DS.attr('string'),
    strIngredient9:  DS.attr('string'),
    strIngredient10: DS.attr('string'),
    strIngredient11: DS.attr('string'),
    strIngredient12: DS.attr('string'),
    strIngredient13: DS.attr('string'),
    strIngredient14: DS.attr('string'),
    strIngredient15: DS.attr('string'),
    strMeasure1:  DS.attr('string'),
    strMeasure2:  DS.attr('string'),
    strMeasure3:  DS.attr('string'),
    strMeasure4:  DS.attr('string'),
    strMeasure5:  DS.attr('string'),
    strMeasure6:  DS.attr('string'),
    strMeasure7:  DS.attr('string'),
    strMeasure8:  DS.attr('string'),
    strMeasure9:  DS.attr('string'),
    strMeasure10: DS.attr('string'),
    strMeasure11: DS.attr('string'),
    strMeasure12: DS.attr('string'),
    strMeasure13: DS.attr('string'),
    strMeasure14: DS.attr('string'),
    strMeasure15: DS.attr('string'),
    
    drinkCounter: DS.attr('number'),
    drinkToShowCounter: function () {
        return (this.get('drinkCounter') - 2) > 0 ? this.get('drinkCounter') - 2 : 0;
    }.property('drinkCounter')
});
