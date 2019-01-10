import React from "react";
import PropTypes from "prop-types";
import { TextInput, View } from "react-native";
import styles from "./Styles/FilterInputStyle";

export const FilterInput = ({ filterCocktails, searchText }) => (
  <View style={styles.container}>
    <TextInput
      style={{ color: "black" }}
      placeholder="Search Cocktails by name"
      keyboardType="default"
      underlineColorAndroid="transparent"
      autoCapitalize="characters"
      secureTextEntry={false}
      onChangeText={s => filterCocktails(s)}
      value={searchText}
    />
  </View>
);

FilterInput.propTypes = {
  filterCocktails: PropTypes.func,
  searchText: PropTypes.string
};

FilterInput.defaultProps = {
  filterCocktails: null,
  searchText: ""
};

export default FilterInput;
