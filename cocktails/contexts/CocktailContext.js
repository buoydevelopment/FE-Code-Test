import React from 'react';
import { Filter, GetDetails } from '../api/CocktailApi';

const CockTailContext = React.createContext({
    cocktails: [],
    cocktailsDetails: [],
    currentDetails: {},
    getCocktails: () => { },
    getCocktailDetails: (id) => { },
});

const Consumer = CockTailContext.Consumer;

export class Provider extends React.Component {
    state = {
        cocktails: [],
        cocktailsDetails: []
    };

    getCocktails() {
        const { cocktails } = this.state;
        if (cocktails.length === 0) {
            Filter('Cocktail_glass')
                .then(cocktails => { this.setState({ cocktails }) });
        };
    }

    getCocktailDetails(id) {
        const { cocktailsDetails } = this.state;
        if (cocktailsDetails[id] === undefined || cocktailsDetails[id] === false) {
            cocktailsDetails[id] = {loading: true};
            GetDetails(id)
                .then(details => {
                    let ingredientsCount = 0;
                    let ingredients = [];
                    for (let i = 1; i <= 15; i++) {
                        if (details['strIngredient' + i] === "")
                            break;
                        ingredients.push({
                            name: details['strIngredient' + i],
                            measure: details['strMeasure' + i]
                        })
                        ingredientsCount ++;
                    }

                    cocktailsDetails[id] = {
                        ...details,
                        ingredientsCount,
                        ingredients
                    };
                })
                .catch(() => {cocktailsDetails[id].loading = false})
                .then(() => {
                    cocktailsDetails[id].loading = false;
                    this.setState({ cocktailsDetails });
                });
        }
    }
    render() {
        return (
            <CockTailContext.Provider value={{
                cocktails: this.state.cocktails,
                cocktailsDetails: this.state.cocktailsDetails,
                getCocktails: this.getCocktails.bind(this),
                getCocktailDetails: this.getCocktailDetails.bind(this),
            }}>
                {this.props.children}
            </CockTailContext.Provider>
        )
    }
};

export const withCocktailContextProvider = ChildComponent => props => (
    <Provider>
        <ChildComponent {...props} />
    </Provider>
);

export const withCocktailContext = ChildComponent => props => (
    <Consumer>
        {context => <ChildComponent {...props} cocktailsContext={context} />}
    </Consumer>
);