import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { getDrinkSelected, getFetching } from "../redux/selectors";
import { CocktailDetail, Spinner } from "../components";

const DrinkDetail = ({ drinkSelected, fetching }) => {
  formatMeasureIngredient = () => {
    const arrIngredients = [];
    Array(15)
      .fill()
      .map((item, i) => {
        if (
          drinkSelected["strIngredient" + (i + 1)] != null &&
          drinkSelected["strIngredient" + (i + 1)].length > 0
        ) {
          arrIngredients.push(
            `${drinkSelected["strMeasure" + (i + 1)]} - ${
              drinkSelected["strIngredient" + (i + 1)]
            }`
          );
        }
      });

    return arrIngredients;
  };

  const arrIngredients = formatMeasureIngredient();
  const { strDrink, strDrinkThumb, strInstructions } = drinkSelected;
  return (
    <View style={styles.container}>
      {fetching ? (
        <Spinner />
      ) : (
        <CocktailDetail
          name={strDrink}
          image={strDrinkThumb}
          ingredients={arrIngredients}
          instructions={strInstructions}
          fetching={fetching}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00acc5"
  }
});

const mapStateToProps = state => ({
  drinkSelected: getDrinkSelected(state),
  fetching: getFetching(state)
});

export default connect(mapStateToProps)(DrinkDetail);
