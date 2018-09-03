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

const getIngredients = (data) => {
    return (data)
        ? _filter(
            data,
            (value, key) => {
                return (_startsWith(key, 'strIngredient') && value) ? true : false;
            }
        )
        : null;
};

export default { filterByName, getIngredients };