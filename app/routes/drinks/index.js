import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('drink');
    },
    actions: {
        filterDrinks: function (filterTerm) {
            console.log('filterTerm'); //this prints whatever I have typed in the filter box
            console.log(filterTerm); //this prints whatever I have typed in the filter box
        }
    }
});
