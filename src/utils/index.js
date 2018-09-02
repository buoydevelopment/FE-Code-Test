import _filter from 'lodash.filter';
import _startsWith from 'lodash.startswith';
import _lowerCase from 'lodash.lowercase';

const filterByName = (collection, drinkName) => {
    return (drinkName)
        ? _filter(collection, (drink) => {
            return _startsWith(
                _lowerCase(drink.strDrink),
                _lowerCase(drinkName)
            );
        })
        : null;
};

export default { filterByName };