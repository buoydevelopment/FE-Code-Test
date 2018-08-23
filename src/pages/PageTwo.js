import React, { Component } from "react";
import PropTypes from "prop-types";
import withDrink from "drinkAPI/withDrink";
import Grid from "@material-ui/core/Grid";
import DrinkCardDetails from "components/DrinkCardDetails";

class PageTwo extends Component {
  componentDidMount = async () => {
    const {
      match: {
        params: { drinkId: id }
      },
      location: { state }
    } = this.props;
    let drinkIndexInList;
    if (state && state.drinkIndexInList >= 0) {
      drinkIndexInList = state.drinkIndexInList;
    }
    this.props.drinks.getDrink(id, drinkIndexInList);
  };
  render() {
    const {
      drinks: { data: drinks }
    } = this.props;
    const {
      location: { state }
    } = this.props;
    let drink;

    if (drinks.size > 0) {
      if (drinks.size === 1) {
        drink = drinks.get(0);
      } else {
        drink = drinks.get(state.drinkIndexInList);
      }
    }

    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>{!!drink && <DrinkCardDetails drink={drink} />}</Grid>
      </Grid>
    );
  }
}

PageTwo.prototypes = {
  drinks: PropTypes.shape({
    getDrink: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }).isRequired
};

export default withDrink(PageTwo);
