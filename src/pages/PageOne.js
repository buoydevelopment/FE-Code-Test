import React, { Component } from "react";
import PropTypes from "prop-types";
import DrinksList from "components/DrinksList";
import withDrink from "drinkAPI/withDrink";

class PageOne extends Component {
  componentDidMount = () => {
    this.props.drinks.getDrinks();
  };
  handleClick = (id, drinkIndexInList) => () => {
    const { history } = this.props;
    history.push(`/drinks/${id}`, { drinkIndexInList });
  };
  render() {
    const {
      drinks,
      location: { state }
    } = this.props;
    let scrollToIndex = 0;
    if (state && state.drinkIndexInList) {
      scrollToIndex = state.drinkIndexInList;
    }
    return (
      <DrinksList
        list={drinks.data}
        handleClick={this.handleClick}
        scrollToIndex={scrollToIndex}
      />
    );
  }
}

PageOne.prototypes = {
  drinks: PropTypes.shape({
    getDrinks: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withDrink(PageOne);
