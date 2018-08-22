import React, { Component } from "react";
import PropTypes from "prop-types";
import DrinkContext from "./DrinkContext";
import { List as ImmutableList, update } from "immutable";
import "whatwg-fetch";

class DrinkProvider extends Component {
  state = {
    drinks: ImmutableList(),
    fullLoaded: false,
    loading: false
  };

  getDrinks = async () => {
    const { drinks: oldDrinks, fullLoaded } = this.state;
    this.setState({ loading: true });
    if (!fullLoaded) {
      try {
        const result = await fetch(
          "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
        );
        const resultAsJson = await result.json();
        let newDrinks = ImmutableList(resultAsJson.drinks);
        if (oldDrinks.size !== 0) {
          oldDrinks.map(oldDrink => {
            const indexInList = newDrinks.findIndex(
              newDrink => newDrink.idDrink === oldDrink.idDrink
            );
            newDrinks = update(newDrinks, indexInList, () => ({ ...oldDrink }));
          });
        }
        this.setState({ drinks: newDrinks, fullLoaded: true, loading: false });
      } catch (e) {
        this.setState({ loading: false });
        console.log(e);
      }
    }
  };

  getDrink = (id, _drinkIndexInList) => {
    let drinkIndexInList = _drinkIndexInList;
    const { drinks } = this.state;

    this.setState({ loading: true });
    if (drinks.size === 0) {
      this.fetchAndUpdateDrinkById(id, 0);
    } else {
      const currentDrinkValue = drinks.get(drinkIndexInList);
      const keysValue = Object.keys(currentDrinkValue);
      const drinkAlreadyLoaded = keysValue.includes("strInstructions");
      if (!drinkAlreadyLoaded) {
        this.fetchAndUpdateDrinkById(id, drinkIndexInList);
      }
    }
  };

  fetchAndUpdateDrinkById = async (id, index) => {
    try {
      const result = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const resultAsJson = await result.json();
      if (resultAsJson.drinks) {
        const { drinks } = this.state;
        const drink = resultAsJson.drinks[0];
        const updatedDrinks = update(drinks, index, () => ({
          ...drink
        }));
        this.setState({ drinks: updatedDrinks, loading: false });
      } else {
        this.setState({ loading: false });
      }
    } catch (e) {
      this.setState({ loading: false });
      console.log(e);
    }
  };

  render() {
    const { getDrinks, getDrink } = this;
    const { drinks } = this.state;
    const { children } = this.props;
    const provider = {
      getDrinks,
      getDrink,
      data: drinks
    };
    return (
      <DrinkContext.Provider value={provider}>{children}</DrinkContext.Provider>
    );
  }
}

DrinkProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default DrinkProvider;
