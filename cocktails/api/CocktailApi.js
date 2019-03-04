import axios from 'axios';

const CocktailApi = axios.create({
    baseURL: 'http://www.thecocktaildb.com/api/json/v1/1/'
});

export const Filter = type => {
    return CocktailApi.get('filter.php?g=' + type)
        .then(response => response.data.drinks)
        .catch(error => { console.log(error) })
        ;
};

export const GetDetails = id => CocktailApi.get('/lookup.php?i=' + id)
.then(response => response.data 
                    && response.data.drinks
                    ? response.data.drinks[0]
                    : null);
