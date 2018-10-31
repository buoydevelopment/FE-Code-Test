import Component from '@ember/component';

export default Component.extend({
    filter: '',
    actions: {
        filter() {
            var filtertext = this.get('filter');
//            this.sendAction('doFilter', filtertext);
            console.log(filtertext);
        }
    },
    keyPress: evt => {
        console.log(evt.keyCode);
        this.get('drink').filter('name')
    }
});
